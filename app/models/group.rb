# == Schema Information
#
# Table name: groups
#
#  id            :integer          not null, primary key
#  letter        :string           not null
#  conference_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Group < ActiveRecord::Base

  belongs_to :conference
  belongs_to :primary_leader, class_name: 'User'
  belongs_to :secondary_leader, class_name: 'User'

  has_many :leaderships, dependent: :destroy
  has_many :students

  validates :letter, presence: true

  validate :validate_leaderships

  def full_name
    "Group #{letter}"
  end

  private

  def validate_leaderships
    if leaderships.count >= 2
      errors.add(:leaderships, 'count exceeds maximum of 2')
    end
  end

end
