# == Schema Information
#
# Table name: volunteers
#
#  id         :integer          not null, primary key
#  email      :string           default(""), not null
#  first_name :string           not null
#  last_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Volunteer < ActiveRecord::Base

  has_one :leadership, as: :leadershipable

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
