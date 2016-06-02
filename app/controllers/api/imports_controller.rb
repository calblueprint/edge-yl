class Api::ImportsController < Api::BaseController

  skip_before_action :verify_authenticity_token

  def checkin
    conference_id = params[:conference_id].to_i
    file = params[:file]
    csv = CSV.parse(file.open, headers: true)
    csv.each do |tuple|
      student_submission = StudentSubmission.new(
        conference_id: conference_id,

        cell_phone: tuple[4] ? tuple[4] : '',
        email: tuple[5],
        first_name: tuple[1],
        home_phone: tuple[3],
        last_name: tuple[2],

        address_city: 'n/a',
        address_one: 'n/a',
        address_state: 'CA',
        address_two: 'n/a',
        address_zip: 'n/a',
        allergies: EnumConstants::BOOLEANS.sample,
        allergies_other: 'None',
        birthday: '2001-12-31',
        carpool: EnumConstants::CARPOOL_OPTIONS.sample,
        ceremony_attendance: EnumConstants::CEREMONY_OPTIONS.sample,
        ceremony_attendance_number: 0,
        current_page: 0,
        dietary_restrictions: 0,
        emergency_consent: 'yes',
        exercise_limitations: 'None',
        guardian_one_email: 'n/a',
        guardian_one_employer: 'n/a',
        guardian_one_first_name: 'n/a',
        guardian_one_job_title: 'n/a',
        guardian_one_last_name: 'n/a',
        guardian_one_phone_number: 'n/a',
        guardian_one_phone_type: EnumConstants::PHONE_TYPES.sample,
        guardian_one_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
        guardian_two_email: '',
        guardian_two_employer: '',
        guardian_two_first_name: '',
        guardian_two_job_title: '',
        guardian_two_last_name: '',
        guardian_two_phone_number:  '',
        guardian_two_phone_type:  '',
        guardian_two_relationship:  '',
        health_conditions: EnumConstants::HEALTH_CONDITIONS.sample,
        health_conditions_description: 'None',
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
        medications: 'None',
        other_dietary_restrictions: '',
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
      case tuple[6]
      when 'M'
        student_submission.gender = 'male'
      when 'F'
        student_submission.gender = 'female'
      else
        student_submission.gender = 'other'
      end
      if student_submission.save
        student = student_submission.seed_submission
        if student
          group = Group.find_or_create_by(
            conference_id: conference_id,
            letter: tuple[8],
          )
          student.update_attributes(group: group)
        end
      end
    end
    render json: { message: 'Import successful' }, status: :created
  end

  def schools
    file = params[:file]
    csv = CSV.parse(file.open, headers: true)
    csv.each do |row|
      School.create(
        address_city: row[8],
        address_one: row[6],
        address_two: row[7],
        address_state: row[9],
        address_zip: row[10],
        name: row[1],
      )
      Contact.create(
        email: row[11],
        first_name: row[2],
        is_primary: true,
        last_name: row[3],
        phone_number: row[12],
        school: school,
        title: row[4],
      )
    end
  end

  def students
    file = params[:file]
    csv = CSV.parse(file.open, headers: true)
    csv.each do |row|
      school = School.create(
       address_city: row[8],
       address_one: row[6],
       address_two: row[7],
       address_state: row[9],
       address_zip: row[10],
       name: row[1],
      )
      contact = Contact.create(
        email: row[11],
        first_name: row[2],
        is_primary: true,
        last_name: row[3],
        phone_number: row[12],
        school: school,
        title: row[4],
      )
      student_submission = StudentSubmission.create(
        address_city: row[22].blank? ? 'n/a' : row[22],
        address_one: row[20].blank? ? 'n/a' : row[20],
        address_state: 'CA',
        address_two: row[21].blank? ? 'n/a' : row[21],
        address_zip: row[24] .blank? ? 'n/a' : row[24],
        allergies: EnumConstants::BOOLEANS.sample, #ROW55
        allergies_other: 'None',
        birthday: '2001-12-31', # row29
        carpool: EnumConstants::CARPOOL_OPTIONS.sample,
        cell_phone: row[27] || 'n/a',
        ceremony_attendance: EnumConstants::CEREMONY_OPTIONS.sample,
        ceremony_attendance_number: 999,
        current_page: 3,
        dietary_restrictions: 0, # row70
        email: row[26] || 'n/a',
        emergency_consent: 'yes',
        exercise_limitations: 'None',
        first_name: row[17] || 'n/a',
        gender: EnumConstants::GENDERS.sample, # row28
        guardian_one_email: row[35] || 'n/a',
        guardian_one_employer: row[37] || 'n/a',
        guardian_one_first_name: row[31] || 'n/a',
        guardian_one_job_title: row[38] || 'n/a',
        guardian_one_last_name: row[32] || 'n/a',
        guardian_one_phone_number: row[36] || 'n/a',
        guardian_one_phone_type: EnumConstants::PHONE_TYPES.sample, #ROW36
        guardian_one_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample, #ROW33
        guardian_two_email: "",
        guardian_two_employer: "",
        guardian_two_first_name: "",
        guardian_two_job_title: "",
        guardian_two_last_name: "",
        guardian_two_phone_number:  "",
        guardian_two_phone_type:  "",
        guardian_two_relationship:  "",
        health_conditions: EnumConstants::HEALTH_CONDITIONS.sample,
        health_conditions_description: 'None',
        home_phone: row[26] || 'n/a',
        immunizations: EnumConstants::BOOLEANS.sample, # row54,
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
        last_name: row[18] || 'n/a',
        medications: 'None',
        other_dietary_restrictions: '',
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
        conference_id: params[:conference_id].to_i,
        # add school attribue to student_submission.rb
      )
      student_submission.seed_submission
      # -1, 'unknown'
      # if school exiists, don't create new one
    end
  end

end
