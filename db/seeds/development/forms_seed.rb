school_form = Form.create(
  target: Form.targets[:school],
  title: 'School Form',
) do |form|
  Page.create(
    form: form,
    description: 'Please provide the following information about your school.',
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
    description: 'Please provide the following information about the School Contact with whom EDGE should communicate.',
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
    description: 'Please provide the following information about the student you have chosen to attend EDGE.',
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
      options: EnumConstants::GENDERS,
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
    description: %s(
        Please provide the following information about your alternate student (if applicable).
        The alternate student will be invited to attend EDGE if the primary student becomes
        unable to participate.
      ),
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
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student First Name',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Last Name',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_address_one',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address One',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      is_required: false,
      key: 'alternate_address_two',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address Two',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_address_city',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address City',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Address State',
    )
    Question.create(
      description: StringConstants::ZIP_FORMAT,
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_address_zip',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Address Zip',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_home_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Home Phone',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_cell_phone',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Cell Phone',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_email',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Email',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      format: Question.formats[:date],
      key: 'alternate_birthday',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Birthday',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_gender',
      options: EnumConstants::GENDERS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Gender',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_shirt_size',
      options: EnumConstants::SHIRT_SIZES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Shirt Size',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_guardian_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian First Name',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_guardian_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian Last Name',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_guardian_email',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_guardian_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Alternate Student Parent/Guardian Phone Number',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'alternate_guardian_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Alternate Student Parent/Guardian Phone Type',
    )
    Question.create(
      enabler_key: 'has_alternate_student',
      enabler_value: EnumConstants::BOOLEANS[0],
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
    description: 'Please review your personal student information below and make any necessary changes.',
    form: form,
    number: 1,
    title: 'General Student Information',
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
    description: 'Please list at least one parent or guardian who we can contact in case of an emergency.',
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
      is_required: false,
      key: 'guardian_two_first_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 First Name',
    )
    Question.create(
      is_required: false,
      key: 'guardian_two_last_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Last Name',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      is_required: false,
      key: 'guardian_two_email',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Email',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      is_required: false,
      key: 'guardian_two_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian 2 Phone Number',
    )
    Question.create(
      is_required: false,
      key: 'guardian_two_phone_type',
      options: EnumConstants::PHONE_TYPES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian 2 Phone Type',
    )
    Question.create(
      is_required: false,
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
    description: 'Please answer the following questions about the participating student\'s medical background.',
    form: form,
    number: 3,
    title: 'Student Medical Information',
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
      title: %s(
        Do you have any allergies to food,
        medications, insects, etc.?
      ),
    )
    Question.create(
      enabler_key: 'allergies',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'allergies_other',
      page: page,
      style: Question.styles[:textarea],
      title: 'Allergies - Please Specify',
    )
    Question.create(
      key: 'health_conditions',
      options: EnumConstants::HEALTH_CONDITIONS,
      page: page,
      style: Question.styles[:checkbox],
      title: %s(
        Have you previously been diagnosed with or currently
        have any of the following health conditions (check all that apply)?
      ),
    )
    Question.create(
      is_required: false,
      key: 'health_conditions_description',
      page: page,
      style: Question.styles[:textarea],
      title: 'Please briefly describe all conditions selected',
    )
    Question.create(
      key: 'medications',
      page: page,
      placeholder: 'Enter "None" if you do not have any',
      style: Question.styles[:textarea],
      title: %s(
        Please list any medication(s) that you currently take
        and/or will need to take during the seminar weekend:
      ),
    )
    Question.create(
      key: 'dietary_restrictions',
      options: EnumConstants::DIETARY_RESTRICTIONS,
      page: page,
      style: Question.styles[:checkbox],
      title: 'Please select any dietary restrictions that you have:',
    )
    Question.create(
      is_required: false,
      key: 'other_dietary_restrictions',
      page: page,
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
      description: %s(
        If, in the judgment of the staff of EDGE Youth Leadership, the child named
        above needs immediate care and treatment as a result of any injury or sickness, I hereby
        give permission to the staff to secure proper treatment for my child. I do hereby consent
        to whatever x-ray, examination, anesthetic, medical, surgical or dental diagnosis or
        treatment and hospital care are considered necessary in the best judgment of the attending
        physician, surgeon or dentist and performed by or under the supervision of the medical
        staff of the hospital or facility furnishing medical or dental services. It is further
        understood that the undersigned will assume full responsibility for any such action,
        including payment of costs. I do hereby agree to indemnify and hold harmless EDGE
        Youth Leadership (including its officers, directors, members and/or volunteers) from any
        claim by any person whomsoever on account of such care and treatment of said child.
      ),
      key: 'emergency_consent_info',
      page: page,
      style: Question.styles[:information],
      title: 'Consent to Treat in Case of Emergency',
    )
    Question.create(
      description: 'Consent to Treat in Case of Emergency',
      key: 'emergency_consent',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Do you consent? (Consent must be declared by a parent/guardian)',
    )
    Question.create(
      description: 'Please type your name',
      enabler_key: 'emergency_consent',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'emergency_consent_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian Digital Signature',
    )
    Question.create(
      description: %s(
        Becoming a leader requires self-reflection and challenging oneself to work through the
        internal barriers to leadership development. Our conference encourages and guides this
        self-reflection through interactive activities and experiential processes. At times this
        can be emotionally difficult, and the student may need additional support to process their
        experience. In light of this, we will have an on-site Licensed Psychologist available to
        talk to the students if a request is made. In order for student participants to talk with
        the Psychologist, we need guardian consent.
      ),
      key: 'psychologist_consent_info',
      page: page,
      style: Question.styles[:information],
      title: 'Consent to Speak to a Licensed Psychologist if in Need',
    )
    Question.create(
      description: 'Consent to Speak to a Licensed Psychologist if in Need',
      key: 'psychologist_consent',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Do you consent? (Consent must be declared by a parent/guardian)',
    )
    Question.create(
      description: 'Please type your name',
      enabler_key: 'psychologist_consent',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'psychologist_consent_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian Digital Signature',
    )
  end
  Page.create(
    description: 'Insurance Information description',
    form: form,
    number: 4,
    title: 'Insurance Information',
  ) do |page|
    Question.create(
      key: 'insurance',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Does your child have health insurance?',
    )
    Question.create(
      description: '(e.g. Anthem Blue Cross, Kaiser Permanente, Health Net, etc.)',
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'insurance_provider',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'insurance_address',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider Address',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'insurance_address_city',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider City',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'insurance_address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Insurance Provider State',
    )
    Question.create(
      description: StringConstants::ZIP_FORMAT,
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'insurance_address_zip',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider Zip',
    )
    Question.create(
      description: StringConstants::PHONE_FORMAT,
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'insurance_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider Phone',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'insurance_id',
      page: page,
      style: Question.styles[:input],
      title: 'Group # or ID #',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: EnumConstants::BOOLEANS[0],
      is_required: false,
      key: 'insurance_other',
      page: page,
      style: Question.styles[:textarea],
      title: 'Other relevant information on the card',
    )
  end
  Page.create(
    description: %s(
      Please tell us how the student will get to and from the conference
      and sign the waiver below.
    ),
    form: form,
    number: 5,
    title: 'Transportation Information',
  ) do |page|
    Question.create(
      description: %s(
        Students are not allowed to leave the conference site for the duration of
        the weekend, unless authorized and released to a parent/guardian and/or accompanied by
        adult staff members according to our conduct policy.
        <br />
        If, in the rare circumstance, a student must leave the conference for a period of time,
        students will only be released to authorized parent(s)/guardian(s). Arrangements for these
        situations must be approved of and made on a case-by-case basis before the conference
        for these situations. Please contact our recruitment directors at registration@edgeyl.org
        or 510-408-6606 as soon as possible if you expect that thestudent will need to leave
        for a period of time during the conference.
        <br />
        <b>Students who drive to the EDGE conference turn over their car keys to
        EDGE Youth Leadership staff upon arrival at student registration. Staff
        will return car keys to the student at Student Checkout.</b>
        </br>
      ),
      key: 'transportation_information',
      page: page,
      style: Question.styles[:information],
      title: 'Travel Information',
    )
    Question.create(
      description: %s(
        Note: If you take public transportation, an approved
        and insured staff member will be able to pick you up
        from the stations/stops closest to the conference site.
      ),
      key: 'transportation',
      options: EnumConstants::TRANSPORTATION_OPTIONS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'How will you be getting to and from the conference?',
    )
    Question.create(
      description: '(must be reasonably near conference site)',
      enabler_key: 'transportation',
      enabler_value: %(
        #{EnumConstants::TRANSPORTATION_OPTIONS[2]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[3]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[4]}
      ),
      key: 'transportation_name',
      page: page,
      style: Question.styles[:input],
      title: 'Name of Station/Airport where you will arrive',
    )
    Question.create(
      description: 'Southwest, BART, AC Transit, etc.',
      enabler_key: 'transportation',
      enabler_value: %(
        #{EnumConstants::TRANSPORTATION_OPTIONS[2]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[3]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[4]}
      ),
      key: 'transportation_carrier',
      page: page,
      style: Question.styles[:input],
      title: 'Flight/Train/Bus Carrier',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: %(
        #{EnumConstants::TRANSPORTATION_OPTIONS[2]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[3]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[4]}
      ),
      key: 'transportation_number',
      page: page,
      style: Question.styles[:input],
      title: 'Flight/Train/Bus Number',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: %(
        #{EnumConstants::TRANSPORTATION_OPTIONS[2]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[3]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[4]}
      ),
      format: Question.formats[:date],
      key: 'transportation_arrival_date',
      page: page,
      style: Question.styles[:input],
      title: 'Arrival Date',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: %(
        #{EnumConstants::TRANSPORTATION_OPTIONS[2]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[3]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[4]}
      ),
      description: 'You must arrive by 8am',
      format: Question.formats[:time],
      key: 'transportation_arrival_time',
      page: page,
      style: Question.styles[:input],
      title: 'Arrival Time',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: %(
        #{EnumConstants::TRANSPORTATION_OPTIONS[2]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[3]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[4]}
      ),
      format: Question.formats[:date],
      key: 'transportation_departure_date',
      page: page,
      style: Question.styles[:input],
      title: 'Departure Date',
    )
    Question.create(
      description: 'Do not plan to leave earlier than 3pm',
      enabler_key: 'transportation',
      enabler_value: %(
        #{EnumConstants::TRANSPORTATION_OPTIONS[2]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[3]}
        #{EnumConstants::TRANSPORTATION_OPTIONS[4]}
      ),
      format: Question.formats[:time],
      key: 'transportation_departure_time',
      page: page,
      style: Question.styles[:input],
      title: 'Departure Time',
    )
    Question.create(
      description: %s(
        For some students, transportation to the conference site can be challenging.
        We do our best to organize carpools for students who need them.
      ),
      key: 'carpool_information',
      page: page,
      style: Question.styles[:information],
      title: 'Carpool Information',
    )
    Question.create(
      is_required: false,
      key: 'carpool',
      options: EnumConstants::CARPOOL_OPTIONS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Are you interested in carpooling?',
    )
    Question.create(
      description: %s(
        I, the undersigned, understand that my child will be transported to the EDGE conference
        in a private automobile, bus, plane, train, subway, etc. and assume such risk on behalf
        of my child. I/we agree not to hold EDGE Youth Leadership or any of its volunteers liable
        for any sum which I/we might claim as a result of injury, or property damage arising out of,
        or caused by any accident or occurrence during the time said student is being transported
        by me, or driving himself/herself, or driving with another adult to or from the youth
        leadership conference.
      ),
      key: 'transportation_waiver_info',
      page: page,
      style: Question.styles[:information],
      title: 'Transportation Waiver',
    )
    Question.create(
      description: %s(
        I have read the Transportation Waiver above and accept the terms.
        (must be done by a parent/guardian)
      ),
      key: 'transportation_consent',
      options: EnumConstants::AGREEMENTS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Waiver Agreement',
    )
    Question.create(
      enabler_key: 'transportation_consent',
      enabler_value: EnumConstants::BOOLEANS[0],
      key: 'transportation_consent_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian digital signature (please type your name)',
    )
  end
  Page.create(
    description: %s(
      Family and Friends are invited to attend the Family and Friends Program at the end of
      the conference. It is a fantastic chance to meet with our conference staff and learn more
      about what EDGE Youth Leadership is about before rejoining with your student.
    ),
    form: form,
    number: 6,
    title: 'Family and Friends Program & Closing Ceremonies',
  ) do |page|
    Question.create(
      description: %s(
        Family and friends are invited to attend the Family and Friends Program at the end
        of the conference. It is a fantastic chance to meet with our conference staff and
        learn more about what EDGE Youth Leadership is about before rejoining with your student.
        <br />
        Following the Family and Friends Program, families, friends, students, and EDGE staff
        will gather at Closing Ceremonies, where we'll hear from some of the EDGE organization's
        leaders as well as student speakers. Closing Ceremonies is a great opportunity to see
        firsthand the excitement and energy of the participating EDGE students.
        <br />
        Following Closing Ceremonies, students will say their goodbyes, pack-up their belongings,
        and formally check out from EDGE.
        <br />
        For details on the timing and location of the Family and Friends Program, Closing
        Ceremonies, and student check-out for the upcoming conference, please see our information
        packet: <a href="http://www.edgeyl.org/reginfo">HERE</a>
      ),
      key: 'ceremony_info',
      page: page,
      style: Question.styles[:information],
      title: 'Family and Friends Program',
    )
    Question.create(
      key: 'ceremony_attendance',
      options: EnumConstants::CEREMONY_OPTIONS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Which of the following end-of-conference programs would you like to attend?',
    )
    Question.create(
      enabler_key: 'ceremony_attendance',
      enabler_value: %(
        #{EnumConstants::CEREMONY_OPTIONS[0]}
        #{EnumConstants::CEREMONY_OPTIONS[1]}
      ),
      is_required: false,
      key: 'ceremony_attendance_number',
      page: page,
      style: Question.styles[:input],
      title: 'Number of family members/friends attending (not including the student)',
    )
  end
  Page.create(
    description: %s(
      The student and a parent/guardian must sign the risk waiver below to enable the
      student to participate in the EDGE conference.
    ),
    form: form,
    number: 7,
    title: 'Risk Waiver',
  ) do |page|
    Question.create(
      description: %s(
        Activities: <b>EDGE Youth Leadership Conference</b>
        <br />
        Dates: <b>June 3-5, 2016</b><br />
        Location: <b>UC Berkeley, Berkeley, CA</b>
        <br />
        In consideration of the right to attend and participate in
        the aforementioned Activities, the Participant (and, if the Participant
        is a minor, his or her parent or legal guardian) hereby:
        <br />
        1. Agrees to abide by all rules and regulations
        established by the EDGE Youth Leadership Conference.
        <br />
        2. Grants to EDGE for any purpose connected with promoting the purposes
        and goals of EDGE, but not for commercial exploitation, the right to use the
        Participant’s name, voice, quotes, and likeness in any writings, photographs,
        films, and recordings of the Participant while he or she is participating in
        the Activities, and any biographical information submitted by the Participant
        to EDGE, and to use, reproduce, publish, and distribute the same.
        <br />
        3. Understands that every effort is made to provide participants with a safe, enjoyable,
        and memorable experience; attest and verify that the Participant is physically, mentally
        and emotionally capable of attending and participating in all activities offered at the
        EDGE Youth Leadership Conference; acknowledges that there are inherent risks in any activity
        involving travel outside of one's own home or community, including, travel to and from the
        site, and, knowing the risks, nevertheless, agree to assume all risks of personal injury
        and any other losses and damage to person or property sustained while participating in,
        attending, and preparing for or traveling to and from the EDGE Youth Leadership; releases,
        waives and hold harmless the EDGE Youth Leadership Conference, the sponsors, the volunteers,
        and officers, employees, agents, representatives, successors, and assigns from any and all
        liability or responsibility for injuries and/or property damage which Participant may
        sustain during the event or during travel to or from the event; understands that this
        waiver and release covers Participant (including all heirs, executors, or administrators)
        and is given in consideration of the EDGE Youth Leadership Conference’s acceptance of
        registration/entry into EDGE 2016. This Consent and Acknowledgment of Risk shall not be
        amended, supplemented, or abrogated without the written consent of EDGE Board of
        Directors, San Leandro, CA.
        <br />
        4. Agrees to defend and indemnify the EDGE Youth
        Leadership Conference from any claim or action filed by a third party (against EDGE) due to
        their (the participant's) actions in this event.
        <br />
        By signing below, the particiapte and the 
        Parent/Guardian confirms that they have read, understand, and consent to the terms
        of this waiver agreement.
      ),
      key: 'risk_info',
      page: page,
      style: Question.styles[:information],
      title: 'Acknowledgement of Risk Waiver',
    )
    Question.create(
      description: 'I have read the Acknowledgement of Risk above and accept the terms.',
      key: 'risk_student_consent',
      options: EnumConstants::AGREEMENTS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student Acknowledgement of Risk Agreement',
    )
    Question.create(
      key: 'risk_student_name',
      page: page,
      style: Question.styles[:input],
      title: 'Student digital signature (please type your name)',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'risk_student_email',
      page: page,
      style: Question.styles[:input],
      title: 'Student Email',
    )
    Question.create(
      description: "Please put today's date",
      format: Question.formats[:date],
      key: 'risk_student_date',
      page: page,
      style: Question.styles[:input],
      title: 'Date',
    )
    Question.create(
      description: %s(
        I have read the Acknowledgement of Risk above and accept the terms.
        This release, its significance and assumption of risk have been
        explained to and are understood by the minor.'
      ),
      key: 'risk_guardian_consent',
      options: EnumConstants::AGREEMENTS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian Acknowledgement of Risk Agreement',
    )
    Question.create(
      key: 'risk_guardian_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian digital signature (please type your name)',
    )
    Question.create(
      key: 'risk_guardian_relationship',
      options: EnumConstants::GUARDIAN_RELATIONSHIPS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian Relationship',
    )
    Question.create(
      description: StringConstants::EMAIL_FORMAT,
      key: 'risk_guardian_email',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian Email',
    )
    Question.create(
      description: "Please put today's date",
      format: Question.formats[:date],
      key: 'risk_guardian_date',
      page: page,
      style: Question.styles[:input],
      title: 'Date',
    )
  end
  Page.create(
    description: %s(
      The student and a parent/guardian must sign the participation commitment below to enable
      the student to participate in the EDGE conference.
    ),
    form: form,
    is_last: true,
    number: 8,
    title: 'Participation Commitment',
  ) do |page|
    Question.create(
      description: %s(
        Dear Participant, <br />
        Being selected to participate in the EDGE experience is a great honor. It’s a fantastic
        opportunity to discover who you are, your potential as a leader, as well as make friends
        with others in your unique peer group. The entire EDGE weekend is a seamless event—if you
        miss even the smallest part, it detracts from the entire experience.
        <br />
        If for any reason you think you can’t participate in the entire conference, please contact
        us immediately. No student has ever regretted missing a sports event, musical recital,
        PSATs or any other kind of event for EDGE. The conference is literally a once-in-a-lifetime
        experience and can have a profound impact on your outlook on life.
        <br />
        We ask you to make the decision to participate in this challenging and
        fun weekend, regardless of other activities that may conflict with it.
        Exceptions include family emergencies and final exams that cannot be
        rescheduled, but do not include studying for exams.
        <br />
        <b>Even if it means missing or postponing an important event or extracurricular activity, if
        you make the commitment, we expect that you will join us for the entire weekend.</b> This
        includes no late arrivals, early departures, or periods of absense from the conference.
        <br />
        If you feel you have an extenuating circumstance that should be considered, please contact
        our recruitment directors at
        <b>e-mail registration@edgeyl.org (510-408-6606)</b> immediately. Otherwise, notify all
        your family, friends, teachers, and coaches right away that you are already booked for a
        life-changing experience during the entirety of the EDGE conference!</b>
      ),
      key: 'participation_info',
      page: page,
      style: Question.styles[:information],
      title: 'Participation Commitment',
    )
    Question.create(
      description: %s(
        I have read the Participation Commitment above and accept the terms.
        Please indicate your commitment to join us by inputting your name below.
      ),
      key: 'participation_student_consent',
      options: EnumConstants::AGREEMENTS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student Participation Agreement',
    )
    Question.create(
      key: 'participation_student_name',
      page: page,
      style: Question.styles[:input],
      title: 'Student Name',
    )
    Question.create(
      description: %s(
        I have read the Participation Commitment above and accept the terms.
        Please indicate your commitment to join us by inputting your name below.
      ),
      key: 'participation_guardian_consent',
      options: EnumConstants::AGREEMENTS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian Participation Agreement',
    )
    Question.create(
      key: 'participation_guardian_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian Name',
    )
  end
end
puts "Created form #{student_form.title}."
