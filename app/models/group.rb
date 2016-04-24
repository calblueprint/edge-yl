# == Schema Information
#
# Table name: groups
#
#  id            :integer          not null, primary key
#  letter        :string           not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Group < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:full_name]

  scope :conference_id, -> (conference_id) { where(conference_id: conference_id) }

  belongs_to :conference

  before_create :assign_letter

  has_many :leaderships, dependent: :destroy
  has_many :students
  has_many :visits, dependent: :destroy, as: :visitable

  accepts_nested_attributes_for :leaderships

  after_create :generate_leaderships

  validates :letter, presence: true
  validates :letter, uniqueness: { scope: :conference_id }

  def females_count
    students.female.count
  end

  def full_name
    "Group #{letter}"
  end

  def self.to_csv
    attributes = %w(letter)
    headers = %w(Letter Primary\ leader Secondary\ leader)
    CSV.generate(headers: true) do |csv|
      csv << headers
      all.each do |group|
        row = attributes.map { |attr| group.send(attr) }
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

  def males_count
    students.male.count
  end

  def others_count
    students.other.count
  end

  def remove_students
    students.each do |student|
      student.group = nil
      student.save
    end
  end

  def students_count
    students.count
  end

  private

  def assign_letter
    self.letter = conference.next_letter
  end

  def generate_leaderships
    if leaderships.where(style: Leadership.styles['primary_leader']).count == 0
      Leadership.create(
        group: self,
      )
    end
    if leaderships.where(style: Leadership.styles['secondary_leader']).count == 0
      Leadership.create(
        group: self,
        style: Leadership.styles['secondary_leader'],
      )
    end
  end

end
