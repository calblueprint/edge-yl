# == Schema Information
#
# Table name: rooms
#
#  id            :integer          not null, primary key
#  capacity      :integer          not null
#  number        :integer          not null
#  gender        :integer          not null
#  conference_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Room < ActiveRecord::Base

  belongs_to :conference

  enum gender: [:female, :male, :other]

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

end
