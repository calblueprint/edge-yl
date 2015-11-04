# == Schema Information
#
# Table name: schools
#
#  id              :integer          not null, primary key
#  address         :string           not null
#  counselor_email :string           not null
#  counselor_name  :string           not null
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do

  factory :school do
    address         { "#{Faker::Address.street_address}, #{Faker::Address.city}" }
    counselor_email { Faker::PhoneNumber.phone_number }
    counselor_name  { Faker::Internet.email }
    name            { "#{Faker::Name.first_name} High School" }
  end

end
