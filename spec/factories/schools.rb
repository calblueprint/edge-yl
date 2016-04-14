# == Schema Information
#
# Table name: schools
#
#  id            :integer          not null, primary key
#  address_city  :string           not null
#  address_one   :string           not null
#  address_state :string           not null
#  address_two   :string           default(""), not null
#  address_zip   :string           not null
#  name          :string           not null
#  website       :string           default(""), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :school do
    address_city          { Faker::Address.city }
    address_one           { Faker::Address.street_address }
    address_state         { Faker::Address.state }
    address_two           { Faker::Address.street_address }
    address_zip           { Faker::Address.zip }
    name                  { "#{Faker::Name.first_name} High School" }
    website               { Faker::Internet.url('schoolweb.com') }
  end
end
