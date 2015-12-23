# == Schema Information
#
# Table name: schools
#
#  id                   :integer          not null, primary key
#  address_city         :string           not null
#  address_one          :string           not null
#  address_state        :string           not null
#  address_two          :string
#  address_zip          :string           not null
#  contact_email        :string           not null
#  contact_first_name   :string           not null
#  contact_last_name    :string           not null
#  contact_phone_number :string           not null
#  contact_title        :string           not null
#  name                 :string           not null
#  website              :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

FactoryGirl.define do

  factory :school do
    address         { "#{Faker::Address.street_address}, #{Faker::Address.city}" }
    counselor_email { Faker::PhoneNumber.phone_number }
    counselor_name  { Faker::Internet.email }
    name            { "#{Faker::Name.first_name} High School" }
  end

end
