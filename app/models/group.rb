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

  include PgSearch

  multisearchable against: [:full_name]

  belongs_to :conference

  has_many :leaderships, dependent: :destroy
  has_many :students
  has_many :visits, dependent: :destroy, as: :visitable

  accepts_nested_attributes_for :leaderships

  after_create :generate_leaderships

  validates :letter, presence: true
  validates_uniqueness_of :letter, scope: :conference_id

  def full_name
    "Group #{letter}"
  end

  def self.to_csv
    attributes = %w{letter}
    headers = %w{Letter Primary_leader Secondary_leader}
    CSV.generate(headers: true) do |csv|
      csv << headers
      all.each do |group|
        row = attributes.map{ |attr| group.send(attr) }
        if group.leaderships.first.user
          primary_leader = group.leaderships.first.user.full_name
          row << primary_leader
        end
        if group.leaderships.last.user
          secondary_leader = group.leaderships.last.user.full_name
          row << secondary_leader
        end
        csv << row
      end 
    end
  end

  private

  def generate_leaderships
    if (self.leaderships.where(style: Leadership.styles['primary_leader']).count == 0)
      Leadership.create(
        group: self,
      )
    end
    if (self.leaderships.where(style: Leadership.styles['secondary_leader']).count == 0)
      Leadership.create(
        group: self,
        style: Leadership.styles['secondary_leader'],
      )
    end
  end

end
