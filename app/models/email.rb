# == Schema Information
#
# Table name: emails
#
#  id              :integer          not null, primary key
#  content         :string           not null
#  from            :string           not null
#  is_draft        :boolean          default(FALSE), not null
#  is_sent         :boolean          default(FALSE), not null
#  is_unread       :boolean          default(TRUE), not null
#  sender          :string           not null
#  subject         :string           not null
#  recipient       :string           not null
#  to              :string           not null
#  email_thread_id :integer
#  emailable_id    :integer
#  emailable_type  :string
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Email < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:to, :from, :subject, :content]

  default_scope { order('updated_at ASC') }

  belongs_to :email_thread
  belongs_to :emailable, polymorphic: true
  belongs_to :user

  before_validation :set_initials, on: :create

  def assign_thread
    self.email_thread ||= find_thread(subject, user)
    self.email_thread ||= EmailThread.create subject: subject, user: user
  end

  def do_send(update_params)
    update_params[:is_draft] = false
    update_params[:is_sent] = true
    if update_attributes update_params
      assign_thread
      save
      if email_thread.subject == ''
        self.email_thread.subject = subject
        email_thread.save
      end
      ApplicationMailer.standard(self).deliver_now
    end
  end

  def emailable_name
    if emailable_type == School.name
      return School.find(emailable_id).primary_contact.full_name
    elsif emailable_type == Student.name
      return Student.find(emailable_id).full_name
    end
  end

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

  def find_thread(subject, user)
    m = /([Rr][Ee]:\s*)*(?<subj>.*)/.match(subject)
    real_subj = m['subj']
    EmailThread.where(user: user).where('lower(subject) = lower(?)', real_subj).first
  end

  def find_user(email)
    m = /(?<name>\S*)@/.match(email)
    if m
      User.where('lower(first_name) || lower(last_name) = ?', m['name']).first
    end
  end

  # We require sender and recipient to both be set at creation
  def set_initials
    self.content ||= ''
    self.subject ||= ''
    if (emailable = find_emailable(recipient))
      self.emailable_id = emailable.id
      self.emailable_type = emailable.class.name
      self.to = smtp_format_name emailable
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
    self.user ||= find_user(recipient)
    if is_sent
      assign_thread
    end
    self.from ||= sender
    self.to ||= recipient
  end

  def smtp_format_name(model)
    if model.class.name == Student.name
      return "#{model.full_name} <#{model.email}>"
    elsif model.class.name == User.name
      return "#{model.full_name} <#{model.username}@#{ENV['email_domain']}>"
    elsif model.class.name == School.name
      return "#{model.primary_contact.full_name} <#{model.primary_contact.email}>"
    end
  end

end
