# == Schema Information
#
# Table name: students
#
#  id                    :integer          not null, primary key
#  address_city          :string           not null
#  address_one           :string           not null
#  address_state         :string           not null
#  address_two           :string           default(""), not null
#  address_zip           :string           not null
#  birthday              :date             not null
#  cell_phone            :string           not null
#  email                 :string           not null
#  first_name            :string           not null
#  gender                :integer          not null
#  guardian_email        :string           not null
#  guardian_employer     :string           default(""), not null
#  guardian_first_name   :string           not null
#  guardian_job_title    :string           default(""), not null
#  guardian_last_name    :string           not null
#  guardian_phone_number :string           not null
#  guardian_phone_type   :integer          not null
#  guardian_relationship :integer          not null
#  home_phone            :string           not null
#  is_flagged            :boolean          not null
#  is_primary            :boolean          not null
#  last_name             :string           not null
#  preferred_name        :string           default(""), not null
#  registration_status   :integer          not null
#  shirt_size            :integer          not null
#  group_id              :integer
#  school_id             :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

FactoryGirl.define do

  factory :student do
    address_city        { Faker::Address.city }
    address_one         { Faker::Address.street_address }
    address_state       { Faker::Address.state }
    address_two         { Faker::Address.street_address }
    address_zip         { Faker::Address.zip }
    birthday            { Faker::Date.between(33.days.ago, Date.today) }
    cell_phone          { Faker::PhoneNumber.phone_number }
    email               { Faker::Internet.email }
    first_name          { Faker::Name.first_name }
    gender              { rand(3) }
    guardian_one_email  { Faker::Internet.email }
    guardian_one_name   { Faker::Name.name }
    guardian_one_phone  { Faker::PhoneNumber.phone_number }
    guardian_two_email  { Faker::Internet.email }
    guardian_two_name   { Faker::Name.name }
    guardian_two_phone  { Faker::PhoneNumber.phone_number }
    home_phone          { Faker::PhoneNumber.phone_number }
    is_flagged          { true }
    is_primary          { true }
    last_name           { Faker::Name.last_name }
    preferred_name      { Faker::Name.first_name }
    registration_status { rand(3) }
    shirt_size          { rand(6) }
  end

end
