# == Schema Information
#
# Table name: feedbacks
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :feedback do
    content { Faker::Lorem.sentence }
  end
end
