# == Schema Information
#
# Table name: volunteers
#
#  id            :integer          not null, primary key
#  email         :string           default(""), not null
#  first_name    :string           not null
#  last_name     :string           not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Volunteer < ActiveRecord::Base

  scope :conference_id, -> (conference_id) { where(conference_id: conference_id) }

  belongs_to :conference

  has_one :leadership

  validates :email, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.groupable
    includes(:leadership).where(leaderships: { id: nil })
  end

end
