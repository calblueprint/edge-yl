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
    capacity { 50 }
    sequence(:number) { |n| n }
    gender { rand(3) }
  end

end
