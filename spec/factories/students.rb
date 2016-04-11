# == Schema Information
#
# Table name: students
#
#  id                         :integer          not null, primary key
#  address_city               :string           not null
#  address_one                :string           not null
#  address_state              :string           not null
#  address_two                :string           default(""), not null
#  address_zip                :string           not null
#  allergies                  :integer          not null
#  birthday                   :date             not null
#  cell_phone                 :string           not null
#  is_checked_in              :boolean          default(FALSE), not null
#  dietary_restrictions       :integer          not null
#  other_dietary_restrictions :string           not null
#  email                      :string           not null
#  emergency_consent          :integer          not null
#  exercise_limitations       :string           not null
#  first_name                 :string           not null
#  gender                     :integer          not null
#  guardian_one_email         :string
#  guardian_one_employer      :string           default("")
#  guardian_one_first_name    :string
#  guardian_one_job_title     :string           default("")
#  guardian_one_last_name     :string
#  guardian_one_phone_number  :string
#  guardian_one_phone_type    :integer
#  guardian_one_relationship  :integer
#  guardian_two_email         :string
#  guardian_two_employer      :string           default("")
#  guardian_two_first_name    :string
#  guardian_two_job_title     :string           default("")
#  guardian_two_last_name     :string
#  guardian_two_phone_number  :string
#  guardian_two_phone_type    :integer
#  guardian_two_relationship  :integer
#  health_conditions          :integer          not null
#  home_phone                 :string           not null
#  immunizations              :integer          not null
#  is_flagged                 :boolean          not null
#  is_primary                 :boolean          not null
#  last_name                  :string           not null
#  medical_guardian_name      :string           not null
#  medications                :string           not null
#  preferred_name             :string           default(""), not null
#  psychologist_consent       :integer          not null
#  registration_status        :integer          not null
#  shirt_size                 :integer          not null
#  conference_id              :integer          not null
#  group_id                   :integer
#  room_id                    :integer
#  school_id                  :integer
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#

FactoryGirl.define do

  factory :student do
    address_city          { Faker::Address.city }
    address_one           { Faker::Address.street_address }
    address_state         { Faker::Address.state }
    address_two           { Faker::Address.street_address }
    address_zip           { Faker::Address.zip }
    allergies             { 0 }
    birthday              { Faker::Date.between(33.days.ago, Date.today) }
    cell_phone            { Faker::Base.numerify('###-###-####') }
    dietary_restrictions  { 0 }
    email                 { Faker::Internet.email }
    emergency_consent     { 0 }
    exercise_limitations  { 'None' }
    first_name            { Faker::Name.first_name }
    gender                { rand(3) }
    guardian_one_email        { Faker::Internet.email }
    guardian_one_employer     { Faker::Name.name }
    guardian_one_first_name   { Faker::Name.first_name }
    guardian_one_job_title    { 'Software Engineer' }
    guardian_one_last_name    { Faker::Name.last_name }
    guardian_one_phone_number { Faker::Base.numerify('###-###-####') }
    guardian_one_phone_type   { rand(3) }
    guardian_one_relationship { rand(9) }
    guardian_two_email        { Faker::Internet.email }
    guardian_two_employer     { Faker::Name.name }
    guardian_two_first_name   { Faker::Name.first_name }
    guardian_two_job_title    { 'Software Engineer' }
    guardian_two_last_name    { Faker::Name.last_name }
    guardian_two_phone_number { Faker::Base.numerify('###-###-####') }
    guardian_two_phone_type   { rand(3) }
    guardian_two_relationship { rand(9) }
    health_conditions     { 0 }
    home_phone            { Faker::Base.numerify('###-###-####') }
    immunizations         { 0 }
    is_flagged            { true }
    is_primary            { true }
    last_name             { Faker::Name.last_name }
    medical_guardian_name { Faker::Name.first_name }
    medications           { 'None' }
    other_dietary_restrictions { 'None' }
    preferred_name        { 'sonia' }
    psychologist_consent  { 0 }
    registration_status   { rand(3) }
    shirt_size            { rand(5) }
  end

end
