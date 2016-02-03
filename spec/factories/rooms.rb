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

FactoryGirl.define do

  factory :room do
    building { "#{Faker::Lorem.word} building" }
    capacity { 50 }
    sequence(:number) { |n| n }
    gender { rand(3) }
  end

end
