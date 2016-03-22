school_submission = SchoolSubmission.create(
  address_city: "#{Faker::Address.city}",
  address_one: "#{Faker::Address.street_address}",
  address_state: EnumConstants::STATES.sample,
  address_two: "#{Faker::Address.street_address}",
  address_zip: "#{Faker::Address.zip}",
  contact_email: Faker::Internet.email,
  contact_first_name: Faker::Name.first_name,
  contact_last_name: Faker::Name.last_name,
  contact_phone_number: Faker::Base.numerify('###-###-####'),
  contact_title: 'Principal',
  current_page: 4,
  has_alternate_student: EnumConstants::BOOLEANS[1],
  name: "#{Faker::Name.first_name} High School",
  primary_address_city: "#{Faker::Address.city}",
  primary_address_one: "#{Faker::Address.street_address}",
  primary_address_state: EnumConstants::STATES.sample,
  primary_address_two: "#{Faker::Address.street_address}",
  primary_address_zip: "#{Faker::Address.zip}",
  primary_birthday: Faker::Date.between(33.days.ago, Date.today),
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

# student_submission = StudentSubmission.create(

# )
# puts "Created student submission #{student_submission.id}."
