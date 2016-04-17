Conference.all.each do |conference|
  (1..20).each do
    new_student = Student.create(
      address_city: Faker::Address.city,
      address_one: Faker::Address.street_address,
      address_state: Faker::Address.state,
      address_two: Faker::Address.street_address,
      address_zip: Faker::Address.zip,
      allergies: EnumConstants::BOOLEANS.sample,
      birthday: Faker::Date.between(33.days.ago, Time.zone.today),
      conference_id: conference.id,
      cell_phone: Faker::Base.numerify('###-###-####'),
      dietary_restrictions: EnumConstants::DIETARY_RESTRICTIONS.sample,
      email: Faker::Internet.email,
      emergency_consent: 0,
      exercise_limitations: 'None',
      first_name: Faker::Name.first_name,
      gender: EnumConstants::GENDERS.sample,
      guardian_one_email: Faker::Internet.email,
      guardian_one_employer: Faker::Name.name,
      guardian_one_first_name: Faker::Name.first_name,
      guardian_one_job_title: 'Software Engineer',
      guardian_one_last_name: Faker::Name.last_name,
      guardian_one_phone_number: Faker::Base.numerify('###-###-####'),
      guardian_one_phone_type: EnumConstants::PHONE_TYPES.sample,
      guardian_one_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
      guardian_two_email: Faker::Internet.email,
      guardian_two_employer: Faker::Name.name,
      guardian_two_first_name: Faker::Name.first_name,
      guardian_two_job_title: 'Software Engineer',
      guardian_two_last_name: Faker::Name.last_name,
      guardian_two_phone_number: Faker::Base.numerify('###-###-####'),
      guardian_two_phone_type: EnumConstants::PHONE_TYPES.sample,
      guardian_two_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
      home_phone: Faker::Base.numerify('###-###-####'),
      health_conditions: EnumConstants::BOOLEANS.sample,
      health_conditions_description: 'None',
      immunizations: EnumConstants::BOOLEANS.sample,
      is_flagged: true,
      is_primary: true,
      last_name: Faker::Name.last_name,
      psychologist_consent: 0,
      psychologist_consent_name: Faker::Name.first_name,
      other_dietary_restrictions: 'None',
      medications: 'None',
      school: School.find(rand(10) + 1),
      shirt_size: EnumConstants::SHIRT_SIZES.sample,
    )
    puts "Created student #{new_student.full_name} for conference #{conference.name}."
  end
end
