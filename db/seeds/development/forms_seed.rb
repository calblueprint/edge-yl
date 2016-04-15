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
    description: 'General information about the primary student from your school.',
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
      description: StringConstants::PHONE_FORMAT,
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
      title: %s(
        Do you (the student attendee) have any
        allergies to food, medications, insects, etc.?
      ),
    )
    Question.create(
      key: 'health_conditions',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: %s(
        Have you (the student attendee) previously been diagnosed with or currently
        have any of the following health conditions (check all that apply)?
      ),
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
      style: Question.styles[:dropdown],
      title: 'Please select any dietary restrictions that you have:',
    )
    Question.create(
      is_required: false,
      key: 'other_dietary_restrictions',
      page: page,
      placeholder: 'Enter "None" if you do not have any',
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
        If, in the judgment of the staff of the EDGE Youth Leadership Seminar, the child named
        above needs immediate care and treatment as a result of any injury or sickness, I hereby
        give permission to the staff to secure proper treatment for my child. I do hereby consent
        to whatever x-ray, examination, anesthetic, medical, surgical or dental diagnosis or
        treatment and hospital care are considerednecessary in the best judgment of the attending
        physician, surgeon or dentist and performed by or under the supervision of the medical
        staff of the hospital or facility furnishing medical or dental services. It is further
        understood that the undersigned will assume full responsibility for any such action,
        including payment of costs. I do hereby agree to indemnify and hold harmless the EDGE
        Youth Leadership (including its officers, directors, members and/or volunteers) from any
        claim by any person whomsoever on account of such care and treatment of said child.
      ),
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
      enabler_key: 'emergency_consent',
      enabler_value: 'yes',
      key: 'emergency_consent_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian Name',
    )
    Question.create(
      description: %s(
        Becoming a leader requires self-reflection and challenging oneself to work through the
        internal barriers to leadership development. Our seminar encourages and guides this
        self-reflection through interactive activities and experiential processes. At times this
        can be emotionally difficult, and the student may need additional support to process their
        experience. In light of this, we will have an on-site Licensed Psychologist available to
        talk to the students if a request is made. In order for student participants to talk with
        the Psychologist, we need guardian consent. By signing below you are consenting for your
        student to speak with a Licensed Psychologist during the EDGE conference.
      ),
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
      enabler_key: 'psychologist_consent',
      enabler_value: 'yes',
      key: 'psychologist_consent_name',
      page: page,
      style: Question.styles[:input],
      title: 'Guardian Name',
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
      enabler_key: 'insurance',
      enabler_value: 'yes',
      description: '(e.g. Anthem Blue Cross, Kaiser Permanente, Health Net, etc.)',
      key: 'insurance_provider',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: 'yes',
      key: 'insurance_address',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider Address',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: 'yes',
      key: 'insurance_address_city',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider City',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: 'yes',
      key: 'insurance_address_state',
      options: EnumConstants::STATES,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Insurance Provider State',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: 'yes',
      description: StringConstants::ZIP_FORMAT,
      key: 'insurance_address_zip',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider Zip',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: 'yes',
      description: StringConstants::PHONE_FORMAT,
      key: 'insurance_phone_number',
      page: page,
      style: Question.styles[:input],
      title: 'Insurance Provider Phone',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: 'yes',
      key: 'insurance_id',
      page: page,
      style: Question.styles[:input],
      title: 'Group # or ID #',
    )
    Question.create(
      enabler_key: 'insurance',
      enabler_value: 'yes',
      is_required: false,
      key: 'insurance_other',
      page: page,
      style: Question.styles[:textarea],
      title: 'Other relevant information on the card',
    )
  end
  Page.create(
    description: 'Transportation Information description',
    form: form,
    number: 5,
    title: 'Transportation Information',
  ) do |page|
    Question.create(
      description: %s(
        Students are not allowed to leave the UC Berkeley, Clark Kerr campus for the duration of
        the weekend, unless authorized and released to a parent/guardian and/or accompanied by
        adult staff members according to our conduct policy.
        <br />
        If, in the rare circumstance, a student must leave the conference for a period of time,
        students will only be released to authorized parent(s)/guardian(s). Arrangements must be
        approved of and made on a case-by-case basis before the conference for these situations.
        Please contact Sri Ramesh and Ali Iwashita at registration@edgeyl.org or 510-408-6606 as
        soon as possible if you expect that your student will need to leave for a period of time
        during the seminar.
        <br />
        <b>Students who drive to the UC Berkeley, Clark Kerr Campus turn over their car keys to
        EDGE Youth Leadership staff upon arrival at student registration on Friday morning. Staff
        will return car keys to the student at Student Checkout on Sunday afternoon.</b>
        </br>
      ),
      key: 'transportation_info',
      page: page,
      style: Question.styles[:information],
      title: 'Travel Information',
    )
    Question.create(
      description: %s(
        An approved and insured staff memeber will be able
        to pick you up from a Public Transporation System
      ),
      key: 'transportation',
      options: EnumConstants::TRANSPORTATION,
      page: page,
      style: Question.styles[:dropdown],
      title: 'How will you be getting to and from the seminar?',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      description: %s(
        Rockridge BART, Downtown Berkeley BART, College Avenue and Parker Street Bus Stop,
        Warring Street and Parker Street Bus Stop, Oakland International Airport
      ),
      key: 'transportation_name',
      page: page,
      style: Question.styles[:input],
      title: 'Station/Airport Name',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      description: 'Southwest, BART, AC Transit, etc.',
      key: 'transportation_carrier',
      page: page,
      style: Question.styles[:input],
      title: 'Flight/Train/Bus Carrier',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      key: 'transportation_number',
      page: page,
      style: Question.styles[:input],
      title: 'Flight/Train/Bus Number',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      key: 'transportation_arrival_date',
      format: Question.formats[:date],
      page: page,
      style: Question.styles[:input],
      title: 'Arrival Date',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      description: 'You must arrive by 8am',
      key: 'transportation_arrival_time',
      page: page,
      style: Question.styles[:input],
      title: 'Arrival Time',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      key: 'transportation_departure_date',
      format: Question.formats[:date],
      page: page,
      style: Question.styles[:input],
      title: 'Departure Date',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      description: 'Do not plan to leave earlier than 3pm',
      key: 'transportation_departure_time',
      page: page,
      style: Question.styles[:input],
      title: 'Departure Time',
    )
    Question.create(
      enabler_key: 'transportation',
      enabler_value: 'Public Transportation - Plane,Public Transportation - Train,Public Transportation - Bus',
      description: %s(
        For some students transportation to the seminar site can be challenging.
        We do our best to organize carpools for students who need them.
      ),
      key: 'carpool_info',
      page: page,
      style: Question.styles[:information],
      title: 'Carpool Information',
    )
    Question.create(
      key: 'carpool',
      options: EnumConstants::CARPOOL,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Are you interested in carpooling?',
    )
    Question.create(
      description: %s(
        I, the undersigned, understand that my child will be transported in a private automobile,
        bus, plane, train, subway, etc. and assume such risk on behalf of my child. I/we agree not
        to hold EDGE Youth Leadership or any of its volunteers liable for any sum which I/we might
        claim as a result of injury, or property damage arising out of, or caused by any accident
        or occurrence during the time said student is being transported by me, or driving
        himself/herself, or driving with another adult to or from the youth leadership seminar.
      ),
      key: 'transportation_waiver_info',
      page: page,
      style: Question.styles[:information],
      title: 'Transportation Waiver',
    )
    Question.create(
      description: 'I have read the Transportation Waiver above and accept the terms.',
      key: 'transportation_consent',
      options: EnumConstants::AGREEMENT,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Waiver Agreement',
    )
    Question.create(
      enabler_key: 'transportation_consent',
      enabler_value: 'yes',
      key: 'transportation_consent_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian name',
    )
  end
  Page.create(
    description: 'Media Consent description',
    form: form,
    number: 6,
    title: 'Media Participation',
  ) do |page|
    Question.create(
      description: %s(
        We send press releases to your local paper announcing the student’s participation
        in the seminar.  Please indicate the name of your newspaper and desire to be
        included in the press release process.  All information is due by May 4th.
      ),
      key: 'media_consent_info',
      page: page,
      style: Question.styles[:information],
      title: 'Media Information',
    )
    Question.create(
      key: 'media_participation',
      options: EnumConstants::BOOLEANS,
      page: page,
      style: Question.styles[:dropdown],
      title: 'I would like to have my participation announced',
    )
    Question.create(
      enabler_key: 'media_participation',
      enabler_value: 'yes',
      key: 'media_newspaper',
      page: page,
      style: Question.styles[:input],
      title: 'Newspaper Name',
    )
    Question.create(
      enabler_key: 'media_participation',
      enabler_value: 'yes',
      is_required: false,
      key: 'media_information',
      page: page,
      style: Question.styles[:textarea],
      title: 'Additional information you would like included in the release.',
    )
  end
  Page.create(
    description: 'Closing ceremony description',
    form: form,
    number: 7,
    title: 'Closing Ceremony',
  ) do |page|
    Question.create(
      description: %s(
        Parents and family members are invited to attend the Parents' Program and Closing
        Ceremonies of the seminar. It is a fantastic chance to learn more what the seminar
        is about and see firsthand the excitement and energy created by the participants.
        <br />
        Please arrive at UC Berkeley, Clark Kerr Campus on Sunday June 3rd, 2016 by 11:15AM
        for the Parents' Program (will begin at 11:30AM) or by 1:20 PM for the Closing Ceremonies.
        <b>See directions and maps in the information packet that was e-mailed to your student or
        refer to the web site <a href="http://www.edgeyl.org/2016reginfo">HERE.</a></b>
        <br />
        Check-out will begin after Closing Ceremonies, around 2:30 pm.  As the time it takes
        to pack and check out varies, please do not plan on leaving the Clark Kerr campus with
        your student before 3:00 pm.  If you are not attending Closing Ceremonies and will not be
        present to help your student pack and check out, please plan to pick up your student after
        3:00 pm, <b> but no later than 3:30 pm.</b>'
      ),
      key: 'ceremony_info_1',
      page: page,
      style: Question.styles[:information],
      title: 'Closing Ceremony',
    )
    Question.create(
      key: 'ceremony_attendance',
      options: EnumConstants::CEREMONY,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Will you join us on Sunday?',
    )
    Question.create(
      enabler_key: 'ceremony_attendance',
      enabler_value: "My family will be attending the Parents' Program and Closing Ceremonies,My family will only be attending Closing Ceremonies",
      key: 'ceremony_attendance_number',
      page: page,
      style: Question.styles[:input],
      title: 'Number of Additional Family Members Attending',
    )
  end
  Page.create(
    description: 'Risk Waiver description',
    form: form,
    number: 8,
    title: 'Risk Waiver',
  ) do |page|
    Question.create(
      description: %s(
        Activities: <b>EDGE Youth Leadership Seminar</b><br /
        Dates: <b>June 3-5, 2016</b><br /
        Location: <b>UC Berkeley, Berkeley, CA</b><br /
        IN CONSIDERATION of the right to attend and participate in
        the aforementioned Activities, the Participant (and, if the Participant
        is a minor, his or her parent or legal guardian) hereby:
        <br />
        1. Agrees to abide by all rules and regulations
        established by the EDGE Youth Leadership Seminar.
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
        EDGE Youth Leadership Seminar; acknowledges that there are inherent risks in any activity
        involving travel outside of one's own home or community, including, travel to and from the
        site, and, knowing the risks, nevertheless, agree to assume all risks of personal injury
        and any other losses and damage to person or property sustained while participating in,
        attending, and preparing for or traveling to and from the EDGE Youth Leadership; releases,
        waives and hold harmless the EDGE Youth Leadership Seminar, the sponsors, the volunteers,
        and officers, employees, agents, representatives, successors, and assigns from any and all
        liability or responsibility for injuries and/or property damage which Participant may
        sustain during the event or during travel to or from the event; understands that this
        waiver and release covers Participant (including all heirs, executors, or administrators)
        and is given in consideration of the EDGE Youth Leadership Seminar’s acceptance of
        registration/entry into EDGE 2016. This Consent and Acknowledgment of Risk shall not be
        amended, supplemented, or abrogated without the written consent of EDGE Board of
        Directors, San Leandro, CA.<br /> 4. Agrees to defend and indemnify the EDGE Youth
        Leadership Seminar from any claim or action filed by a third party (against EDGE) due to
        their (the participant's) actions in this event.<br /> By signing below, the
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
      options: EnumConstants::AGREEMENT,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Terms of Agreement',
    )
    Question.create(
      key: 'risk_student_name',
      page: page,
      style: Question.styles[:input],
      title: 'Student Name',
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
      options: EnumConstants::AGREEMENT,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent Acknowledgement of Risk Agreement',
    )
    Question.create(
      key: 'risk_guardian_name',
      page: page,
      style: Question.styles[:input],
      title: 'Parent/Guardian Name',
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
      Dear Participant, <br />
      Being selected to participate in the EDGE experience is a great honor. It’s a fantastic
      opportunity to discover who you are, your potential as a leader, as well as make friends
      with others in your unique peer group. The entire EDGE weekend is a seamless event—if you
      miss even the smallest part; it detracts from the entire experience.
      <br />
      If for any reason you think you can’t participate in the entire seminar, please contact
      us immediately. No student has ever regretted missing a sports event, musical recital,
      PSATs or any other kind of event for EDGE. The seminar is literally a once-in-a-lifetime
      experience and can have a profound impact on your outlook on life.
      <br />
      We ask you to make the decision to participate in this challenging and fun weekend,
      regardless of other activities that may conflict with it. Exceptions include family
      emergencies and final exams that cannot be rescheduled, but do not include studying for exams.
      <br />
      <b>Even if it means missing or postponing an important event or extracurricular activity, if
      you make the commitment, we expect that you will join us for the entire weekend.</b> That
      includes no early departures on Sunday and requests to attend off-campus religious services.
      <br />
      If you feel you have an extenuating circumstance that should be considered, please contact
      <b>Jocelyne Alva</b> and <b>Gabriela</b> Medina at
      <b>510-408-6606 (e-mail registration@edgeyl.org)</b> immediately. Notify all your family,
      friends, teachers and coaches right away that you are already booked for a life-changing
      experience on <b>June 3-5, 2016!</b>
    ),
    form: form,
    is_last: true,
    number: 9,
    title: 'Participation Commitment',
  ) do |page|
    Question.create(
      description: 'descriptoinadflkdsjfadslf',
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
      options: EnumConstants::AGREEMENT,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student Participation agreement',
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
      options: EnumConstants::AGREEMENT,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Parent/Guardian Participation agreement',
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
