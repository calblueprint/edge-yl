# == Schema Information
#
# Table name: students
#
#  id                            :integer          not null, primary key
#  address_city                  :string           not null
#  address_one                   :string           not null
#  address_state                 :string           not null
#  address_two                   :string           default(""), not null
#  address_zip                   :string           not null
#  allergies                     :integer          not null
#  birthday                      :date             not null
#  cell_phone                    :string           not null
#  is_checked_in                 :boolean          default(FALSE), not null
#  dietary_restrictions          :string           not null
#  email                         :string           not null
#  emergency_consent             :integer          not null
#  exercise_limitations          :string           not null
#  first_name                    :string           not null
#  gender                        :integer          not null
#  guardian_one_email            :string           not null
#  guardian_one_employer         :string           default(""), not null
#  guardian_one_first_name       :string           not null
#  guardian_one_job_title        :string           default(""), not null
#  guardian_one_last_name        :string           not null
#  guardian_one_phone_number     :string           not null
#  guardian_one_phone_type       :integer          not null
#  guardian_one_relationship     :integer          not null
#  guardian_two_email            :string           not null
#  guardian_two_employer         :string           default(""), not null
#  guardian_two_first_name       :string           not null
#  guardian_two_job_title        :string           default(""), not null
#  guardian_two_last_name        :string           not null
#  guardian_two_phone_number     :string           not null
#  guardian_two_phone_type       :integer          not null
#  guardian_two_relationship     :integer          not null
#  health_conditions             :string           not null
#  health_conditions_description :string           default(""), not null
#  home_phone                    :string           not null
#  immunizations                 :integer          not null
#  is_flagged                    :boolean          not null
#  is_primary                    :boolean          not null
#  last_name                     :string           not null
#  medications                   :string           not null
#  other_dietary_restrictions    :string           not null
#  preferred_name                :string           default(""), not null
#  psychologist_consent          :integer          not null
#  psychologist_consent_name     :string           not null
#  shirt_size                    :integer          not null
#  conference_id                 :integer          not null
#  group_id                      :integer
#  room_id                       :integer
#  school_id                     :integer
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#

FactoryGirl.define do
  factory :student do
    address_city               { Faker::Address.city }
    address_one                { Faker::Address.street_address }
    address_state              { Faker::Address.state }
    address_two                { Faker::Address.street_address }
    address_zip                { Faker::Address.zip }
    allergies                  { EnumConstants::BOOLEANS.sample }
    birthday                   { Faker::Date.between(33.days.ago, Time.zone.today) }
    cell_phone                 { Faker::Base.numerify('###-###-####') }
    dietary_restrictions       { EnumConstants::DIETARY_RESTRICTIONS.sample }
    email                      { Faker::Internet.email }
    emergency_consent          { EnumConstants::BOOLEANS.sample }
    exercise_limitations       { 'None' }
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
    health_conditions          { EnumConstants::BOOLEANS.sample }
    health_conditions_description { 'None' }
    home_phone                 { Faker::Base.numerify('###-###-####') }
    immunizations              { EnumConstants::BOOLEANS.sample }
    is_flagged                 { true }
    is_primary                 { true }
    last_name                  { Faker::Name.last_name }
    medications                { 'None' }
    other_dietary_restrictions { 'None' }
    preferred_name             { 'Sonia' }
    psychologist_consent       { EnumConstants::BOOLEANS.sample }
    psychologist_consent_name  { Faker::Name.first_name }
    shirt_size                 { EnumConstants::SHIRT_SIZES.sample }
  end
end
