# == Schema Information
#
# Table name: volunteers
#
#  id            :integer          not null, primary key
#  email         :string           default(""), not null
#  first_name    :string           not null
#  last_name     :string           not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :volunteer do
    email       { Faker::Internet.email }
    first_name  { Faker::Name.first_name }
    last_name   { Faker::Name.last_name }
  end
end
