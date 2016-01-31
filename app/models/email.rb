# == Schema Information
#
# Table name: emails
#
#  id         :integer          not null, primary key
#  content    :string           not null
#  from       :string           not null
#  sender     :string           not null
#  subject    :string           not null
#  recipient  :string           not null
#  to         :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Email < ActiveRecord::Base

  belongs_to :emailable, polymorphic: true

  before_validation :set_initials, on: :create

  private

  def set_initials
    self.to ||= ''
    self.from ||= ''
  end

end
