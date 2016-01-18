# == Schema Information
#
# Table name: rooms
#
#  id            :integer          not null, primary key
#  number        :integer          not null
#  conference_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Room < ActiveRecord::Base

  belongs_to :conference

  has_many :students

  validates :number, presence: true

end
