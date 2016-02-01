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

  validates :capacity, presence: true
  validates :number, presence: true

  def self.to_csv
    attributes = %w{room_id full_name}
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |room|
        csv << attributes.map{ |attr| room.students.send(attr) }
      end
    end
  end

end
