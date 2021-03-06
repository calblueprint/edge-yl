# == Schema Information
#
# Table name: students
#
#  id                        :integer          not null, primary key
#  address_city              :string           not null
#  address_one               :string           not null
#  address_state             :integer          not null
#  address_two               :string           default(""), not null
#  address_zip               :string           not null
#  birthday                  :date             not null
#  cell_phone                :string           not null
#  is_checked_in             :boolean          default(FALSE), not null
#  email                     :string           not null
#  first_name                :string           not null
#  gender                    :integer          not null
#  guardian_one_email        :string           not null
#  guardian_one_employer     :string           default(""), not null
#  guardian_one_first_name   :string           not null
#  guardian_one_job_title    :string           default(""), not null
#  guardian_one_last_name    :string           not null
#  guardian_one_phone_number :string           not null
#  guardian_one_phone_type   :integer          not null
#  guardian_one_relationship :integer          not null
#  guardian_two_email        :string           default(""), not null
#  guardian_two_employer     :string           default(""), not null
#  guardian_two_first_name   :string           default(""), not null
#  guardian_two_job_title    :string           default(""), not null
#  guardian_two_last_name    :string           default(""), not null
#  guardian_two_phone_number :string           default(""), not null
#  guardian_two_phone_type   :integer
#  guardian_two_relationship :integer
#  home_phone                :string           default(""), not null
#  is_flagged                :boolean          default(FALSE), not null
#  is_primary                :boolean          not null
#  last_name                 :string           not null
#  preferred_name            :string           default(""), not null
#  shirt_size                :integer          not null
#  submission_id             :uuid             not null
#  conference_id             :integer          not null
#  group_id                  :integer
#  room_id                   :integer
#  school_id                 :integer
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#

FactoryGirl.define do
  factory :student do
    address_city               { Faker::Address.city }
    address_one                { Faker::Address.street_address }
    address_state              { EnumConstants::STATES.sample }
    address_two                { Faker::Address.street_address }
    address_zip                { Faker::Address.zip }
    birthday                   { Faker::Date.between(33.days.ago, Time.zone.today) }
    cell_phone                 { Faker::Base.numerify('###-###-####') }
    email                      { Faker::Internet.email }
    first_name                 { Faker::Name.first_name }
    gender                     { EnumConstants::GENDERS.sample }
    guardian_one_email         { Faker::Internet.email }
    guardian_one_employer      { Faker::Name.name }
    guardian_one_first_name    { Faker::Name.first_name }
    guardian_one_job_title     { 'Software Engineer' }
    guardian_one_last_name     { Faker::Name.last_name }
    guardian_one_phone_number  { Faker::Base.numerify('###-###-####') }
    guardian_one_phone_type    { EnumConstants::PHONE_TYPES.sample }
    guardian_one_relationship  { EnumConstants::GUARDIAN_RELATIONSHIPS.sample }
    guardian_two_email         { Faker::Internet.email }
    guardian_two_employer      { Faker::Name.name }
    guardian_two_first_name    { Faker::Name.first_name }
    guardian_two_job_title     { 'Software Engineer' }
    guardian_two_last_name     { Faker::Name.last_name }
    guardian_two_phone_number  { Faker::Base.numerify('###-###-####') }
    guardian_two_phone_type    { EnumConstants::PHONE_TYPES.sample }
    guardian_two_relationship  { EnumConstants::GUARDIAN_RELATIONSHIPS.sample }
    home_phone                 { Faker::Base.numerify('###-###-####') }
    is_flagged                 { true }
    is_primary                 { true }
    last_name                  { Faker::Name.last_name }
    preferred_name             { 'Sonia' }
    shirt_size                 { EnumConstants::SHIRT_SIZES.sample }
  end
end
