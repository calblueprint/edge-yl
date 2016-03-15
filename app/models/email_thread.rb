# == Schema Information
#
# Table name: email_threads
#
#  id         :integer          not null, primary key
#  subject    :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EmailThread < ActiveRecord::Base

  self.default_scope { order('updated_at DESC') }

  belongs_to :user

  has_many :emails, dependent: :destroy

  def content
    Email.where(email_thread: self).first.content
  end

  def is_unread
    emails.where(is_unread: :true).count > 0
  end

  def mark_as_read
    thread_emails = Email.where(email_thread: self, is_sent: :true)
    thread_emails.each do |e|
      if e[:is_unread]
        e[:is_unread] = false
        e.save
      end
    end
  end
end
