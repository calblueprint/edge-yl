# == Schema Information
#
# Table name: conferences
#
#  id         :integer          not null, primary key
#  end_date   :date             not null
#  location   :string           not null
#  name       :string           not null
#  start_date :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :conference do
    name       { 'EDGE 2015' }
    end_date   { Faker::Date.backward(1) }
    location   { 'University of California, Berkeley' }
    start_date { Faker::Date.forward(2) }
  end
end
