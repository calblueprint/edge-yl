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
  has_many :visits, dependent: :destroy, as: :visitable

  after_create :generate_leaderships

  validates :letter, presence: true
  validates_uniqueness_of :letter, scope: :conference_id

  def full_name
    "Group #{letter}"
  end

  private

  def generate_leaderships
    Leadership.create(
      group: self,
    )
    Leadership.create(
      group: self,
      style: Leadership.styles['secondary_leader'],
    )
  end

end
