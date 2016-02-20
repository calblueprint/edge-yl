school_form = Form.create(
  target: Form.targets[:school],
  title: 'School Form',
) do |form|
  Page.create(
    form: form,
    number: 1,
    title: 'School Information',
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
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
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
    Question.create(
      key: 'contact_first_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Contact first name',
    )
    Question.create(
      key: 'contact_last_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Contact last name',
    )
    Question.create(
      key: 'contact_title',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Contact title',
    )
    Question.create(
      key: 'contact_email',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Contact email',
    )
    Question.create(
      key: 'contact_phone_number',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Contact phone number',
    )
  end
  Page.create(
    form: form,
    is_last: true,
    number: 2,
    title: 'Primary Student Information',
  ) do |page|
    Question.create(
      key: 'student_first_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student first name',
    )
    Question.create(
      key: 'student_last_name',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student last name',
    )
    Question.create(
      key: 'student_address_one',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student address one',
    )
    Question.create(
      key: 'student_address_city',
      page: page,
      placeholder: 'San Francisco',
      style: Question.styles[:input],
      title: 'Student address city',
    )
    Question.create(
      key: 'student_address_state',
      page: page,
      placeholder: 'CA',
      style: Question.styles[:input],
      title: 'Student address state',
    )
    Question.create(
      key: 'student_address_zip',
      page: page,
      placeholder: '90474',
      style: Question.styles[:input],
      title: 'Student address zip',
    )
    Question.create(
      key: 'student_home_phone',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student home phone',
    )
    Question.create(
      key: 'student_cell_phone',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student cell phone',
    )
    Question.create(
      key: 'student_gender',
      options: Student.genders.keys,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student gender',
    )
    Question.create(
      key: 'student_birthday',
      page: page,
      placeholder: '...',
      style: Question.styles[:input],
      title: 'Student birthday',
    )
    Question.create(
      key: 'student_shirt_size',
      options: Student.shirt_sizes.keys,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Student shirt size',
    )
  end
end
puts "Created form #{school_form.title}."

student_form = Form.create(
  target: Form.targets[:student],
  title: 'Student Form',
) do |form|
  Page.create(
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
      key: 'gender',
      options: Student.genders.keys,
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
      key: 'email',
      page: page,
      placeholder: 'kiraklapper@gmail.com',
      style: Question.styles[:input],
      title: 'Email',
    )
    Question.create(
      key: 'cell_phone',
      page: page,
      placeholder: '(555) 555-5555',
      style: Question.styles[:input],
      title: 'Cell phone',
    )
    Question.create(
      key: 'home_phone',
      page: page,
      placeholder: '(555) 555-5555',
      style: Question.styles[:input],
      title: 'Home phone',
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
      key: 'shirt_size',
      options: Student.shirt_sizes.keys,
      page: page,
      style: Question.styles[:dropdown],
      title: 'Shirt size',
    )
  end
  Page.create(
    form: form,
    is_last: true,
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
      options: Student.guardian_relationships.keys,
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
      options: Student.guardian_phone_types.keys,
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
end
puts "Created form #{student_form.title}."
