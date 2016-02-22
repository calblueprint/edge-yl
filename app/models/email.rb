# == Schema Information
#
# Table name: emails
#
#  id             :integer          not null, primary key
#  content        :string           not null
#  from           :string           not null
#  is_draft       :boolean          default(FALSE), not null
#  is_sent        :boolean          default(FALSE), not null
#  is_unread      :boolean          default(TRUE), not null
#  sender         :string           not null
#  subject        :string           not null
#  recipient      :string           not null
#  to             :string           not null
#  emailable_id   :integer
#  emailable_type :string
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Email < ActiveRecord::Base

  self.default_scope { order('updated_at DESC') }

  belongs_to :emailable, polymorphic: true
  belongs_to :user

  before_validation :set_initials, on: :create
  before_validation :try_send, on: :update

  def self.draft(params, user)
    draft = Email.new params
    draft[:is_draft] = true
    draft[:is_unread] = false
    draft.user = user
    draft
  end

  private

  def find_emailable(email)
    emailable = Contact.where(email: email).first
    if emailable
      return emailable.school
    else
      emailable = Student.where(email: email).first
      return emailable
    end
  end

  def find_user(email)
    User.where(email: email).first
  end

  # We require sender and recipient to both be set at creation
  def set_initials
    self.content ||= ''
    self.subject ||= ''

    if (emailable = find_emailable(recipient))
      self.emailable_id = emailable.id
      self.emailable_type = emailable.class.name
      self.from = smtp_format_name emailable
      if (user = find_user(sender))
        self.user = user
        self.from = smtp_format_name user
      end
    elsif (emailable = find_emailable(sender))
      self.emailable_id = emailable.id
      self.emailable_type = emailable.class.name
      self.from = smtp_format_name emailable
      if (user = find_user(recipient))
        self.user = user
        self.to = smtp_format_name user
      end
    end

    self.from ||= self.sender
    self.to ||= self.recipient
  end

  def smtp_format_name(model)
    if model.class.name == Student.name or model.class.name == User.name
      return "#{model.full_name} <#{model.email}>"
    elsif model.class.name == School.name
      return "#{model.primary_contact.full_name} <#{model.primary_contact.email}>"
    end
  end

  def try_send
    if !is_draft && !is_sent
      StudentMailer.standard(self).deliver_now
      self.is_sent = true
    end
  end
end
