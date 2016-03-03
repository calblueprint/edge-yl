# == Schema Information
#
# Table name: email_threads
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EmailThread < ActiveRecord::Base

  self.default_scope { order('updated_at DESC') }

  has_many :emails, dependent: :destroy

  def subject
    subj = Email.where(email_thread: self).first.subject
    m = /([Rr][Ee]:\s*)?(?<subj>.*)/.match(subj)
    return m['subj'] unless m == nil
  end

  def content
    Email.where(email_thread: self).first.content
  end
end
