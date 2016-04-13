# == Schema Information
#
# Table name: rooms
#
#  id            :integer          not null, primary key
#  building      :string           not null
#  capacity      :integer          not null
#  gender        :integer          not null
#  number        :integer          not null
#  style         :integer          not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Room < ActiveRecord::Base

  scope :conference_id, -> conference_id { where(conference_id: conference_id) }
  scope :style, -> style { where(style: styles[style]) }

  belongs_to :conference

  enum gender: [:female, :male, :other]
  enum style: [:staff, :student]

  has_many :students

  validates :building, presence: true
  validates :capacity, presence: true
  validates :number, presence: true, uniqueness: { scope: :conference_id }

  def self.to_csv
    attributes = %w{number}
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |room|
        students = room.students
        row = attributes.map{ |attr| room.send(attr) }
        students.map { |student| row << student.full_name }
        csv << row
      end
    end
  end

  def available_capacity_count
    capacity - students.count
  end

  def full_name
    "#{building} #{number}"
  end

  def remove_students
    self.students.each do |student|
      student.room = nil
      student.save
    end
  end

end
