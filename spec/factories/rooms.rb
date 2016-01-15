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

FactoryGirl.define do
  factory :room do
    room { Faker::Number.between(1, 25) }
  end

end
