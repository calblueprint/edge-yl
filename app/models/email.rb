# == Schema Information
#
# Table name: emails
#
#  id             :integer          not null, primary key
#  content        :string           not null
#  from           :string           not null
#  sender         :string           not null
#  subject        :string           not null
#  recipient      :string           not null
#  to             :string           not null
#  is_draft       :boolean          default(FALSE), not null
#  is_unread      :boolean          default(TRUE), not null
#  emailable_id   :integer
#  emailable_type :string
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Email < ActiveRecord::Base

  belongs_to :emailable, polymorphic: true
  belongs_to :user

  before_validation :set_initials, on: :create
  before_validation :try_send, on: :update

  def self.draft(params, user)
    draft = Email.new params
    draft[:is_draft] = true
    draft.user = user
    draft
  end

  private

  def set_initials
    self.content ||= ''
    self.subject ||= ''
    self.from ||= smtp_format_name user.full_name, user.email
    self.sender ||= user.email
    if self.emailable_type == Student.name
      student = Student.find self.emailable_id
      self.recipient = student.email
      self.to = smtp_format_name student.full_name, self.recipient
    elsif self.emailable_type == School.name
      school = School.find self.emailable_id
      self.recipient = school.email
      self.to = smtp_format_name school.name, self.recipient
    end
  end

  def smtp_format_name(name, email)
    "#{name} <#{email}>"
  end

  def try_send
    if !is_draft && !is_sent
      StudentMailer.standard(draft).deliver_now
      self.is_sent = true
    end
  end

end
