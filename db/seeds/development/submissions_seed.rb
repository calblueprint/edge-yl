school_submission = SchoolSubmission.create(
  address_city: Faker::Address.city,
  address_one: Faker::Address.street_address,
  address_state: EnumConstants::STATES.sample,
  address_two: Faker::Address.street_address,
  address_zip: Faker::Address.zip,
  alternate_address_city: Faker::Address.city,
  alternate_address_one: Faker::Address.street_address,
  alternate_address_state: EnumConstants::STATES.sample,
  alternate_address_two: Faker::Address.street_address,
  alternate_address_zip: Faker::Address.zip,
  alternate_birthday: Faker::Date.between(33.days.ago, Time.zone.today),
  alternate_cell_phone: Faker::Base.numerify('###-###-####'),
  alternate_email: Faker::Internet.email,
  alternate_first_name: Faker::Name.first_name,
  alternate_gender: EnumConstants::GENDERS.sample,
  alternate_guardian_first_name: Faker::Name.first_name,
  alternate_guardian_email: Faker::Internet.email,
  alternate_guardian_last_name: Faker::Name.last_name,
  alternate_guardian_phone_number: Faker::Base.numerify('###-###-####'),
  alternate_guardian_phone_type: EnumConstants::PHONE_TYPES.sample,
  alternate_guardian_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
  alternate_home_phone: Faker::Base.numerify('###-###-####'),
  alternate_last_name: Faker::Name.last_name,
  alternate_shirt_size: EnumConstants::SHIRT_SIZES.sample,
  conference_id: Conference.active.first.id,
  contact_email: Faker::Internet.email,
  contact_first_name: Faker::Name.first_name,
  contact_last_name: Faker::Name.last_name,
  contact_phone_number: Faker::Base.numerify('###-###-####'),
  contact_title: 'Principal',
  current_page: 4,
  has_alternate_student: EnumConstants::BOOLEANS[0],
  name: "#{Faker::Name.first_name} High School",
  primary_address_city: Faker::Address.city,
  primary_address_one: Faker::Address.street_address,
  primary_address_state: EnumConstants::STATES.sample,
  primary_address_two: Faker::Address.street_address,
  primary_address_zip: Faker::Address.zip,
  primary_birthday: Faker::Date.between(33.days.ago, Time.zone.today),
  primary_cell_phone: Faker::Base.numerify('###-###-####'),
  primary_email: Faker::Internet.email,
  primary_first_name: Faker::Name.first_name,
  primary_gender: EnumConstants::GENDERS.sample,
  primary_guardian_first_name: Faker::Name.first_name,
  primary_guardian_email: Faker::Internet.email,
  primary_guardian_last_name: Faker::Name.last_name,
  primary_guardian_phone_number: Faker::Base.numerify('###-###-####'),
  primary_guardian_phone_type: EnumConstants::PHONE_TYPES.sample,
  primary_guardian_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
  primary_home_phone: Faker::Base.numerify('###-###-####'),
  primary_last_name: Faker::Name.last_name,
  primary_shirt_size: EnumConstants::SHIRT_SIZES.sample,
  website: Faker::Internet.url('schoolweb.com'),
)
puts "Created school submission #{school_submission.id}."

student_submission = StudentSubmission.create(
  address_city: Faker::Address.city,
  address_one: Faker::Address.street_address,
  address_state: EnumConstants::STATES.sample,
  address_two: Faker::Address.street_address,
  address_zip: Faker::Address.zip,
  allergies: EnumConstants::BOOLEANS.sample,
  birthday: Faker::Date.between(33.days.ago, Time.zone.today),
  carpool: EnumConstants::CARPOOL.sample,
  cell_phone: Faker::Base.numerify('###-###-####'),
  ceremony_attendance: EnumConstants::BOOLEANS.sample,
  ceremony_attendance_number: Faker::Name.first_name,
  conference_id: Conference.active.first.id,
  current_page: 3,
  dietary_restrictions: EnumConstants::DIETARY_RESTRICTIONS.sample,
  email: Faker::Internet.email,
  emergency_consent: EnumConstants::BOOLEANS.sample,
  exercise_limitations: Faker::Name.first_name,
  first_name: Faker::Name.first_name,
  gender: EnumConstants::GENDERS.sample,
  guardian_one_email: Faker::Internet.email,
  guardian_one_employer: Faker::Name.first_name,
  guardian_one_first_name: Faker::Name.first_name,
  guardian_one_job_title: Faker::Name.first_name,
  guardian_one_last_name: Faker::Name.last_name,
  guardian_one_phone_number: Faker::Base.numerify('###-###-####'),
  guardian_one_phone_type: EnumConstants::PHONE_TYPES.sample,
  guardian_one_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
  guardian_two_email: Faker::Internet.email,
  guardian_two_employer: Faker::Name.first_name,
  guardian_two_first_name: Faker::Name.first_name,
  guardian_two_job_title: Faker::Name.first_name,
  guardian_two_last_name: Faker::Name.last_name,
  guardian_two_phone_number: Faker::Base.numerify('###-###-####'),
  guardian_two_phone_type: EnumConstants::PHONE_TYPES.sample,
  guardian_two_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
  health_conditions: EnumConstants::BOOLEANS.sample,
  home_phone: Faker::Base.numerify('###-###-####'),
  immunizations: EnumConstants::BOOLEANS.sample,
  insurance: EnumConstants::BOOLEANS.sample,
  insurance_address: Faker::Address.street_address,
  insurance_address_city: Faker::Address.city,
  insurance_address_state: EnumConstants::STATES.sample,
  insurance_address_zip: Faker::Address.zip,
  insurance_id: Faker::Name.first_name,
  insurance_phone_number: Faker::Base.numerify('###-###-####'),
  insurance_provider: Faker::Name.first_name,
  insurance_other: Faker::Name.first_name,
  is_primary: true,
  last_name: Faker::Name.last_name,
  media_information: Faker::Name.first_name,
  media_newspaper: Faker::Name.first_name,
  media_participation: EnumConstants::BOOLEANS.sample,
  medications: Faker::Name.first_name,
  other_dietary_restrictions: Faker::Name.first_name,
  participation_guardian_consent: EnumConstants::AGREEMENT.sample,
  participation_guardian_name: Faker::Name.first_name,
  participation_student_consent: EnumConstants::AGREEMENT.sample,
  participation_student_name: Faker::Name.first_name,
  preferred_name: Faker::Name.first_name,
  psychologist_consent: EnumConstants::BOOLEANS.sample,
  psychologist_consent_name: Faker::Name.first_name,
  risk_guardian_consent: EnumConstants::AGREEMENT.sample,
  risk_guardian_date: Faker::Date.between(33.days.ago, Time.zone.today),
  risk_guardian_email: Faker::Internet.email,
  risk_guardian_name: Faker::Name.first_name,
  risk_guardian_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
  risk_student_consent: EnumConstants::AGREEMENT.sample,
  risk_student_date: Faker::Date.between(33.days.ago, Time.zone.today),
  risk_student_email: Faker::Internet.email,
  risk_student_name: Faker::Name.first_name,
  shirt_size: EnumConstants::SHIRT_SIZES.sample,
  transportation: EnumConstants::TRANSPORTATION.sample,
  transportation_arrival_date: Faker::Date.between(33.days.ago, Time.zone.today),
  transportation_arrival_time: 'time',
  transportation_carrier: 'sdf',
  transportation_consent: EnumConstants::AGREEMENT.sample,
  transportation_consent_name: 'sdf',
  transportation_departure_date: Faker::Date.between(33.days.ago, Time.zone.today),
  transportation_departure_time: 'time',
  transportation_name: 'sdf',
  transportation_number: 'sdf',
)

puts "Created student submission #{student_submission.id}."
