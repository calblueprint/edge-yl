school_form = Form.create(
  target: Form.targets[:school],
  title: 'School Form',
) do |form|
  Page.create(
    form: form,
    description: 'General information about your school.',
    number: 1,
    title: 'Step 1 - School Information',
  ) do |page|
    Question.create(
      key: 'name',
      page: page,
      style: Question.styles[:input],
      title: 'School Name',
    )
    Question.create(
      key: 'address_one',
      page: page,
      style: Question.styles[:input],
      title: 'School Address One',
    )
    Question.create(
      is_required: false,
      key: 'address_two',
      page: page,
      style: Question.styles[:input],
      title: 'School Address Two',
    )
    Question.create(
      key: 'address_city',
      page: page,
      style: Question.styles[:input],
      title: 'School Address City',
    )
    Question.create(
      key: 'address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'School Address State',
    )
    Question.create(
      description: StringConstants::ZIP_FORMAT,
      key: 'address_zip',
      page: page,
      style: Question.styles[:input],
      title: 'School Address Zip',
    )
    Question.create(
      is_required: false,
      key: 'website',
      page: page,
      style: Question.styles[:input],
      title: 'School Website',
    )
  end
  Page.create(
    form: form,
    description: 'General information about the primary contact for your school.',
    number: 2,
    title: 'Step 2 - School Contact Information',
  ) do |page|
    Question.create(
      key: 'contact_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'School Contact First Name',
    )
    Question.create(
      key: 'contact_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'School Contact Last Name',
    )
    Question.create(
      key: 'contact_title',
      page: page,
      style: Question.styles[:input],
      title: 'School Contact Title',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'contact_email',
      page: page,
      style: Question.styles[:input],
      title: 'School Contact Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'contact_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'School Contact Phone Number',
    )
  end
  Page.create(
    form: form,
    description: 'General information about the primary Student from your school.',
    number: 3,
    title: 'Step 3 - Primary Student Information',
  ) do |page|
    Question.create(
      key: 'primary_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student First Name',
    )
    Question.create(
      key: 'primary_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Last Name',
    )
    Question.create(
      key: 'primary_address_one',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Address One',
    )
    Question.create(
      is_required: false,
      key: 'primary_address_two',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Address Two',
    )
    Question.create(
      key: 'primary_address_city',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Address City',
    )
    Question.create(
      key: 'primary_address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Primary Student Address State',
    )
    Question.create(
      description: StringConstants::ZIP_FORMAT,
      key: 'primary_address_zip',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Address Zip',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'primary_home_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Home Phone',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'primary_cell_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Cell Phone',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'primary_email',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Email',
    )
    Question.create(
      format: Question.formats[:date],
      key: 'primary_birthday',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Birthday',
    )
    Question.create(
      key: 'primary_gender',
      options: Student.genders.keys,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Primary Student Gender',
    )
    Question.create(
      key: 'primary_shirt_size',
      options: EnumConstants::SHIRT_SIZES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Primary Student Shirt Size',
    )
        Question.create(
      key: 'primary_guardian_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Parent/Guardian First Name',
    )
    Question.create(
      key: 'primary_guardian_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Parent/Guardian Last Name',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'primary_guardian_email',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Parent/Guardian Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'primary_guardian_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Primary Student Parent/Guardian Phone Number',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'primary_guardian_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Primary Student Parent/Guardian Phone Type',
    )
    Question.create(
      key: 'primary_guardian_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Primary Student Parent/Guardian Relationship',
    )
  end
  Page.create(
    form: form,
    description: 'General information about the alternate Student from your school.',
    is_last: true,
    number: 4,
    title: 'Step 4 - Alternate Student Information',
  ) do |page|
    Question.create(
      key: 'has_alternate_student',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Do you have an alternate student?',
    )
    Question.create(
      is_required: false,
      key: 'alternate_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student First Name',
    )
    Question.create(
      is_required: false,
      key: 'alternate_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Last Name',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_one',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address One',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_two',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address Two',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_city',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address City',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Address State',
    )
    Question.create(
      description: StringConstants::ZIP_FORMAT,
      is_required: false,
      key: 'alternate_address_zip',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address Zip',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      is_required: false,
      key: 'alternate_home_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Home Phone',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      is_required: false,
      key: 'alternate_cell_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Cell Phone',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      is_required: false,
      key: 'alternate_email',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Email',
    )
    Question.create(
      is_required: false,
      format: Question.formats[:date],
      key: 'alternate_birthday',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Birthday',
    )
    Question.create(
      is_required: false,
      key: 'alternate_gender',
      options: EnumConstants::GENDERS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Gender',
    )
    Question.create(
      is_required: false,
      key: 'alternate_shirt_size',
      options: EnumConstants::SHIRT_SIZES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Shirt Size',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian First Name',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian Last Name',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      is_required: false,
      key: 'alternate_guardian_email',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      is_required: false,
      key: 'alternate_guardian_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian Phone Number',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      is_required: false,
      key: 'alternate_guardian_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Parent/Guardian Phone Type',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Parent/Guardian Relationship',
    )
  end
end

puts "Created form #{school_form.title}."

student_form = Form.create(
  target: Form.targets[:student],
  title: 'Student Form',
) do |form|
  Page.create(
    description: 'General Information description',
    form: form,
    number: 1,
    title: 'General Information',
  ) do |page|
    Question.create(
      key: 'first_name',
      page: page,
      style: Question.styles[:input],
      title: 'First Name',
    )
    Question.create(
      key: 'last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Last Name',
    )
    Question.create(
      is_required: false,
      key: 'preferred_name',
      page: page,
      style: Question.styles[:input],
      title: 'Preferred Name',
    )
    Question.create(
      key: 'address_one',
      page: page,
      style: Question.styles[:input],
      title: 'Address One',
    )
    Question.create(
      is_required: false,
      key: 'address_two',
      page: page,
      style: Question.styles[:input],
      title: 'Address Two',
    )
    Question.create(
      key: 'address_city',
      page: page,
      style: Question.styles[:input],
      title: 'Address City',
    )
    Question.create(
      key: 'address_state',
      page: page,
      style: Question.styles[:input],
      title: 'Address State',
    )
    Question.create(
      description: StringConstants::ZIP_FORMAT,
      key: 'address_zip',
      page: page,
      style: Question.styles[:input],
      title: 'Address Zip',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'email',
      page: page,
      style: Question.styles[:input],
      title: 'Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'home_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Home Phone',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'cell_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Cell Phone',
    )
    Question.create(
      key: 'gender',
      options: EnumConstants::GENDERS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Gender',
    )
    Question.create(
      format: Question.formats[:date],
      key: 'birthday',
      page: page,
      style: Question.styles[:input],
      title: 'Birthday',
    )
    Question.create(
      key: 'shirt_size',
      options: EnumConstants::SHIRT_SIZES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Shirt Size',
    )
  end
  Page.create(
    description: 'Emergency Information description',
    form: form,
    number: 2,
    title: 'Emergency Contact Information',
  ) do |page|
    Question.create(
      key: 'guardian_one_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 1 First Name',
    )
    Question.create(
      key: 'guardian_one_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 1 Last Name',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'guardian_one_email',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 1 Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'guardian_one_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 1 Phone Number',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'guardian_one_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian 1 Phone Type',
    )
    Question.create(
      key: 'guardian_one_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian 1 Relationship',
    )
    Question.create(
      is_required: false,
      key: 'guardian_one_employer',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 1 Employer',
    )
    Question.create(
      is_required: false,
      key: 'guardian_one_job_title',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 1 Job Title',
    )
    Question.create(
      key: 'guardian_two_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 First Name',
    )
    Question.create(
      key: 'guardian_two_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Last Name',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'guardian_two_email',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'guardian_two_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Phone Number',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      key: 'guardian_two_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian 2 Phone Type',
    )
    Question.create(
      key: 'guardian_two_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian 2 Relationship',
    )
    Question.create(
      is_required: false,
      key: 'guardian_two_employer',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Employer',
    )
    Question.create(
      is_required: false,
      key: 'guardian_two_job_title',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Job Title',
    )
  end
  Page.create(
    description: 'Medical Information description',
    form: form,
    is_last: true,
    number: 3,
    title: 'Medical Information',
  ) do |page|
    Question.create(
      key: 'immunizations',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Have you had all immunizations as required by your school?',
    )
    Question.create(
      key: 'allergies',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Do you (the student attendee) have any allergies to food, medications, insects, etc.?',
    )
    Question.create(
      key: 'health_conditions',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Have you (the student attendee) previously been diagnosed with or currently have any of the following health conditions (check all that apply)?',
    )
    Question.create(
      key: 'medications',
      page: page,
      placeholder: 'Enter "None" if you do not have any',
      style: Question.styles[:textarea],
      title: 'Please list any medication(s) that you currently take and/or will need to take during the seminar weekend:',
    )
    Question.create(
      key: 'dietary_restrictions',
      options: EnumConstants::DIETARY_RESTRICTIONS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Please select any dietary restrictions that you have:',
    )
    Question.create(
      is_required: false,
      key: 'other_dietary_restrictions',
      page: page,
      placeholder: 'Enter "None" if you do not have any' ,
      style: Question.styles[:textarea],
      title: 'Please list any other dietary restrictions that you have:',
    )
    Question.create(
      key: 'exercise_limitations',
      page: page,
      placeholder: 'Enter "None" if you do not have any',
      style: Question.styles[:textarea],
      title: 'Please list any limitations on the amount of physical exercise you can engage in:',
    )
    Question.create(
      description: 'If, in the judgment of the staff of the EDGE Youth Leadership Seminar, the child named above needs immediate care and treatment as a result of ' +
                   'any injury or sickness, I hereby give permission to the staff to secure proper treatment for my child. I do hereby consent to whatever x-ray, ' +
                   'examination, anesthetic, medical, surgical or dental diagnosis or treatment and hospital care are considered necessary in the best judgment of ' +
                   'the attending physician, surgeon or dentist and performed by or under the supervision of the medical staff of the hospital or facility furnishing ' +
                   'medical or dental services. It is further understood that the undersigned will assume full responsibility for any such action, including payment of costs. ' +
                   'I do hereby agree to indemnify and hold harmless the EDGE Youth Leadership (including its officers, directors, members and/or volunteers) '+
                   'from any claim by any person whomsoever on account of such care and treatment of said child.',
      key: 'emergency_consent_info',
      page: page,
      style: Question.styles[:information],
      title: 'Consent to Treat in Case of Emergency',
    )
    Question.create(
      key: 'emergency_consent',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Do you consent?',
    )
    Question.create(
      description: 'Becoming a leader requires self-reflection and challenging oneself to work through the internal barriers to leadership development. Our seminar ' +
                   'encourages and guides this self-reflection through interactive activities and experiential processes. At times this can be emotionally difficult, ' +
                   'and the student may need additional support to process their experience. In light of this, we will have an on-site Licensed Psychologist available ' +
                   'to talk to the students if a request is made. In order for student participants to talk with the Psychologist, we need guardian consent. By signing ' +
                   'below you are consenting for your student to speak with a Licensed Psychologist during the EDGE conference.',
      key: 'psychologist_consent_info',
      page: page,
      style: Question.styles[:information],
      title: 'Consent to Speak to a Licensed Psychologist if in Need',
    )
    Question.create(
      key: 'psychologist_consent',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Do you consent?',
    )
    Question.create(
      key: 'medical_guardian_name',
      page: page,
      style: Question.styles[:input],
      title: 'Guardian Name',
    )
  end
end
puts "Created form #{student_form.title}."
