def generate_student_submission(conference)
  student_submission = StudentSubmission.create(
    address_city: Faker::Address.city,
    address_one: Faker::Address.street_address,
    address_state: EnumConstants::STATES.sample,
    address_two: Faker::Address.street_address,
    address_zip: Faker::Address.zip,
    allergies: EnumConstants::BOOLEANS.sample,
    allergies_other: 'None',
    birthday: Faker::Date.between(33.days.ago, Time.zone.today),
    carpool: EnumConstants::CARPOOL_OPTIONS.sample,
    cell_phone: Faker::Base.numerify('###-###-####'),
    ceremony_attendance: EnumConstants::CEREMONY_OPTIONS.sample,
    ceremony_attendance_number: 2,
    conference_id: conference.id,
    current_page: 3,
    dietary_restrictions: EnumConstants::DIETARY_RESTRICTIONS.sample,
    email: Faker::Internet.email,
    emergency_consent: EnumConstants::BOOLEANS.sample,
    emergency_consent_name: Faker::Name.first_name,
    exercise_limitations: 'None',
    first_name: Faker::Name.first_name,
    gender: EnumConstants::GENDERS.sample,
    guardian_one_email: Faker::Internet.email,
    guardian_one_employer: Faker::Name.first_name,
    guardian_one_first_name: Faker::Name.first_name,
    guardian_one_job_title: 'None',
    guardian_one_last_name: Faker::Name.last_name,
    guardian_one_phone_number: Faker::Base.numerify('###-###-####'),
    guardian_one_phone_type: EnumConstants::PHONE_TYPES.sample,
    guardian_one_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
    guardian_two_email: Faker::Internet.email,
    guardian_two_employer: Faker::Name.first_name,
    guardian_two_first_name: Faker::Name.first_name,
    guardian_two_job_title: 'None',
    guardian_two_last_name: Faker::Name.last_name,
    guardian_two_phone_number: Faker::Base.numerify('###-###-####'),
    guardian_two_phone_type: EnumConstants::PHONE_TYPES.sample,
    guardian_two_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
    health_conditions: EnumConstants::HEALTH_CONDITIONS.sample,
    health_conditions_description: 'None',
    home_phone: Faker::Base.numerify('###-###-####'),
    immunizations: EnumConstants::BOOLEANS.sample,
    insurance: EnumConstants::BOOLEANS.sample,
    insurance_address: Faker::Address.street_address,
    insurance_address_city: Faker::Address.city,
    insurance_address_state: EnumConstants::STATES.sample,
    insurance_address_zip: Faker::Address.zip,
    insurance_id: Faker::Name.first_name,
    insurance_phone_number: Faker::Base.numerify('###-###-####'),
    insurance_provider: 'None',
    insurance_other: 'None',
    is_primary: true,
    last_name: Faker::Name.last_name,
    medications: 'None',
    other_dietary_restrictions: 'None',
    participation_guardian_consent: EnumConstants::AGREEMENTS.sample,
    participation_guardian_name: Faker::Name.first_name,
    participation_student_consent: EnumConstants::AGREEMENTS.sample,
    participation_student_name: Faker::Name.first_name,
    preferred_name: Faker::Name.first_name,
    psychologist_consent: EnumConstants::BOOLEANS.sample,
    psychologist_consent_name: Faker::Name.first_name,
    risk_guardian_consent: EnumConstants::AGREEMENTS.sample,
    risk_guardian_date: Faker::Date.between(33.days.ago, Time.zone.today),
    risk_guardian_email: Faker::Internet.email,
    risk_guardian_name: Faker::Name.first_name,
    risk_guardian_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
    risk_student_consent: EnumConstants::AGREEMENTS.sample,
    risk_student_date: Faker::Date.between(33.days.ago, Time.zone.today),
    risk_student_email: Faker::Internet.email,
    risk_student_name: Faker::Name.first_name,
    shirt_size: EnumConstants::SHIRT_SIZES.sample,
    transportation: EnumConstants::TRANSPORTATION_OPTIONS.sample,
    transportation_arrival_date: Faker::Date.between(33.days.ago, Time.zone.today),
    transportation_arrival_time: Time.zone.now,
    transportation_carrier: 'Bart',
    transportation_consent: EnumConstants::AGREEMENTS.sample,
    transportation_consent_name: Faker::Name.first_name,
    transportation_departure_date: Faker::Date.between(33.days.ago, Time.zone.today),
    transportation_departure_time: Time.zone.now,
    transportation_name: Faker::Name.first_name,
    transportation_number: 777,
  )
  student_submission
end

Conference.all.each do |conference|
  (1..10).each do
    student_submission = generate_student_submission(conference)
    student_submission.seed_submission
    puts "Created student submission #{student_submission.id} and associated student."
  end
end

student_submission = generate_student_submission(Conference.active.first)
student_submission.first_name = "Warren"
student_submission.last_name = "Shen"
student_submission.email = "warrenzshen@gmail.com"
student_submission.seed_submission

student_submission = generate_student_submission(Conference.active.first)
puts "Created student submission #{student_submission.id}."
