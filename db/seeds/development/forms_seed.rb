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
      placeholder: '...',
      style: Question.styles[:input],
      title: 'School name',
    )
    Question.create(
      key: 'address_one',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Address one',
    )
    Question.create(
      is_required: false,
      key: 'address_two',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Address two',
    )
    Question.create(
      key: 'address_city',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Address city',
    )
    Question.create(
      key: 'address_state',
      options: EnumConstants::STATES,
      page: page,
      placeholder: '...',
      style: Question.styles[:dropdown],
      title: 'Address state',
    )
    Question.create(
      key: 'address_zip',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Address zip',
    )
    Question.create(
      is_required: false,
      key: 'website',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'School website',
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
      placeholder: '...',
      style: Question.styles[:input],
      title: 'School contact first name',
    )
    Question.create(
      key: 'contact_last_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'School contact last name',
    )
    Question.create(
      key: 'contact_title',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'School contact title',
    )
    Question.create(
      key: 'contact_email',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'School contact email',
    )
    Question.create(
      key: 'contact_phone_number',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'School contact phone number',
    )
  end
  Page.create(
    form: form,
    description: 'General information about the primary student from your school.',
    number: 3,
    title: 'Step 3 - Primary Student Information',
  ) do |page|
    Question.create(
      key: 'primary_first_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student first name',
    )
    Question.create(
      key: 'primary_last_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student last name',
    )
    Question.create(
      key: 'primary_address_one',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student address one',
    )
    Question.create(
      is_required: false,
      key: 'primary_address_two',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student address two',
    )
    Question.create(
      key: 'primary_address_city',
      page: page,
      placeholder: 'San Francisco',
      style: Question.styles[:input],
      title: 'Student address city',
    )
    Question.create(
      key: 'primary_address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student address state',
    )
    Question.create(
      key: 'primary_address_zip',
      page: page,
      placeholder: '90474',
      style: Question.styles[:input],
      title: 'Student address zip',
    )
    Question.create(
      key: 'primary_home_phone',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student home phone',
    )
    Question.create(
      key: 'primary_cell_phone',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student cell phone',
    )
    Question.create(
      key: 'primary_email',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student email',
    )
    Question.create(
      format: Question.formats[:date],
      key: 'primary_birthday',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student birthday',
    )
    Question.create(
      key: 'primary_gender',
      options: Student.genders.keys,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student gender',
    )
    Question.create(
      key: 'primary_shirt_size',
      options: EnumConstants::SHIRT_SIZES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student shirt size',
    )
        Question.create(
      key: 'primary_guardian_first_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Parent/guardian first name',
    )
    Question.create(
      key: 'primary_guardian_last_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Parent/guardian last name',
    )
    Question.create(
      key: 'primary_guardian_email',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Parent/guardian email',
    )
    Question.create(
      key: 'primary_guardian_phone_number',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Parent/guardian phone number',
    )
    Question.create(
      key: 'primary_guardian_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/guardian phone type',
    )
    Question.create(
      key: 'primary_guardian_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/guardian relationship',
    )
  end
  Page.create(
    form: form,
    description: 'General information about the alternate student from your school.',
    is_last: true,
    number: 4,
    title: 'Step 4 - Alternate Student Information',
  ) do |page|
    Question.create(
      key: 'has_alternate_student',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Would you like to enter information about an alternate student?',
    )
    Question.create(
      is_required: false,
      key: 'alternate_first_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student first name',
    )
    Question.create(
      is_required: false,
      key: 'alternate_last_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student last name',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_one',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student address one',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_two',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student address two',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_city',
      page: page,
      placeholder: 'San Francisco',
      style: Question.styles[:input],
      title: 'Alternate student address city',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate student address state',
    )
    Question.create(
      is_required: false,
      key: 'alternate_address_zip',
      page: page,
      placeholder: '90474',
      style: Question.styles[:input],
      title: 'Alternate student address zip',
    )
    Question.create(
      is_required: false,
      key: 'alternate_home_phone',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student home phone',
    )
    Question.create(
      is_required: false,
      key: 'alternate_cell_phone',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student cell phone',
    )
    Question.create(
      is_required: false,
      key: 'alternate_email',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student email',
    )
    Question.create(
      is_required: false,
      format: Question.formats[:date],
      key: 'alternate_birthday',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student birthday',
    )
    Question.create(
      is_required: false,
      key: 'alternate_gender',
      options: EnumConstants::GENDERS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate student gender',
    )
    Question.create(
      is_required: false,
      key: 'alternate_shirt_size',
      options: EnumConstants::SHIRT_SIZES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate student shirt size',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_first_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student\'s parent/guardian first name',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_last_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student\'s parent/guardian last name',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_email',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student\'s parent/guardian email',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_phone_number',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Alternate student\'s parent/guardian phone number',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate student\'s parent/guardian phone type',
    )
    Question.create(
      is_required: false,
      key: 'alternate_guardian_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate student\'s parent/guardian relationship',
    )
  end
end

puts "Created form #{school_form.title}."

primary_form = Form.create(
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
      placeholder: 'Kira',
      style: Question.styles[:input],
      title: 'First name',
    )
    Question.create(
      key: 'last_name',
      page: page,
      placeholder: 'Klapper',
      style: Question.styles[:input],
      title: 'Last name',
    )
    Question.create(
      is_required: false,
      key: 'preferred_name',
      page: page,
      placeholder: 'Kira',
      style: Question.styles[:input],
      title: 'Preferred name',
    )
    Question.create(
      key: 'address_one',
      page: page,
      placeholder: '213 Queen Street',
      style: Question.styles[:input],
      title: 'Address one',
    )
    Question.create(
      is_required: false,
      key: 'address_two',
      page: page,
      placeholder: '213 Queen Street',
      style: Question.styles[:input],
      title: 'Address two',
    )
    Question.create(
      key: 'address_city',
      page: page,
      placeholder: 'San Francisco',
      style: Question.styles[:input],
      title: 'Address city',
    )
    Question.create(
      key: 'address_state',
      page: page,
      placeholder: 'CA',
      style: Question.styles[:input],
      title: 'Address state',
    )
    Question.create(
      key: 'address_zip',
      page: page,
      placeholder: '90474',
      style: Question.styles[:input],
      title: 'Address zip',
    )
    Question.create(
      key: 'email',
      page: page,
      placeholder: 'kiraklapper@gmail.com',
      style: Question.styles[:input],
      title: 'Email',
    )
    Question.create(
      key: 'home_phone',
      page: page,
      placeholder: '(555) 555-5555',
      style: Question.styles[:input],
      title: 'Home phone',
    )
    Question.create(
      key: 'cell_phone',
      page: page,
      placeholder: '(555) 555-5555',
      style: Question.styles[:input],
      title: 'Cell phone',
    )
    Question.create(
      key: 'gender',
      options: EnumConstants::GENDERS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Gender',
    )
    Question.create(
      key: 'birthday',
      page: page,
      placeholder: '01/01/96',
      style: Question.styles[:input],
      title: 'Birthday',
    )
    Question.create(
      key: 'shirt_size',
      options: EnumConstants::SHIRT_SIZES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'T-shirt size',
    )
  end
  Page.create(
    description: 'Emergency Information description',
    form: form,
    number: 2,
    title: 'Emergency Information',
  ) do |page|
    Question.create(
      key: 'guardian_first_name',
      page: page,
      placeholder: 'Kira',
      style: Question.styles[:input],
      title: 'Guardian first name',
    )
    Question.create(
      key: 'guardian_last_name',
      page: page,
      placeholder: 'Klapper',
      style: Question.styles[:input],
      title: 'Guardian last name',
    )
    Question.create(
      key: 'guardian_email',
      page: page,
      placeholder: 'kiraklapper@gmail.com',
      style: Question.styles[:input],
      title: 'Guardian email',
    )
    Question.create(
      key: 'guardian_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Guardian relationship',
    )
    Question.create(
      key: 'guardian_phone_number',
      page: page,
      placeholder: '(555) 555-5555',
      style: Question.styles[:input],
      title: 'Guardian phone number',
    )
    Question.create(
      key: 'guardian_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Guardian phone type',
    )
    Question.create(
      is_required: false,
      key: 'guardian_employer',
      page: page,
      placeholder: 'EDGE Youth Leadership',
      style: Question.styles[:input],
      title: 'Guardian employer',
    )
    Question.create(
      is_required: false,
      key: 'guardian_job_title',
      page: page,
      placeholder: 'Software Engineer',
      style: Question.styles[:input],
      title: 'Guardian job title',
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
      placeholder: 'Kira Klapper',
      style: Question.styles[:input],
      title: 'Guardian Name',
    )
  end
end
puts "Created form #{primary_form.title}."
