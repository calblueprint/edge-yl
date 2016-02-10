school_form = Form.create(
  target: Form.targets[:school],
  title: 'School Form',
) do |form|
  Page.create(
    form: form,
    title: 'School Page',
  ) do |page|
    Section.create(
      page: page,
      title: 'General Information',
    ) do |section|
      Question.create(
        key: 'name',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'School name',
      )
      Question.create(
        is_required: false,
        key: 'website',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'School website',
      )
      Question.create(
        key: 'address_one',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Address one',
      )
      Question.create(
        is_required: false,
        key: 'address_two',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Address two',
      )
      Question.create(
        key: 'address_city',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Address city',
      )
      Question.create(
        key: 'address_state',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Address state',
      )
      Question.create(
        key: 'address_zip',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Address zip',
      )
    end
    Section.create(
      page: page,
      title: 'General Information',
    ) do |section|
      Question.create(
        key: 'contact_first_name',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Contact first name',
      )
      Question.create(
        key: 'contact_last_name',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Contact last name',
      )
      Question.create(
        key: 'contact_email',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Contact email',
      )
      Question.create(
        key: 'contact_phone_number',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Contact phone number',
      )
      Question.create(
        key: 'contact_title',
        placeholder: '...',
        section: section,
        style: Question.styles[:input],
        title: 'Contact title',
      )
    end
  end
end
puts "Created form #{school_form.title}."

student_form = Form.create(
  target: Form.targets[:student],
  title: 'Student Form',
) do |form|
  Page.create(
    form: form,
    title: 'Student Page',
  ) do |page|
    Section.create(
      page: page,
      title: 'General Information',
    ) do |section|
      Question.create(
        key: 'first_name',
        placeholder: 'Kira',
        section: section,
        style: Question.styles[:input],
        title: 'First name',
      )
      Question.create(
        key: 'last_name',
        placeholder: 'Klapper',
        section: section,
        style: Question.styles[:input],
        title: 'Last name',
      )
      Question.create(
        is_required: false,
        key: 'preferred_name',
        placeholder: 'Kira',
        section: section,
        style: Question.styles[:input],
        title: 'Preferred name',
      )
      Question.create(
        key: 'gender',
        options: Student.genders.keys,
        section: section,
        style: Question.styles[:dropdown],
        title: 'Gender',
      )
      Question.create(
        key: 'birthday',
        placeholder: '01/01/96',
        section: section,
        style: Question.styles[:input],
        title: 'Birthday',
      )
      Question.create(
        key: 'email',
        placeholder: 'kiraklapper@gmail.com',
        section: section,
        style: Question.styles[:input],
        title: 'Email',
      )
      Question.create(
        key: 'cell_phone',
        placeholder: '(555) 555-5555',
        section: section,
        style: Question.styles[:input],
        title: 'Cell phone',
      )
      Question.create(
        key: 'home_phone',
        placeholder: '(555) 555-5555',
        section: section,
        style: Question.styles[:input],
        title: 'Home phone',
      )
      Question.create(
        key: 'address_one',
        placeholder: '213 Queen Street',
        section: section,
        style: Question.styles[:input],
        title: 'Address one',
      )
      Question.create(
        is_required: false,
        key: 'address_two',
        placeholder: '213 Queen Street',
        section: section,
        style: Question.styles[:input],
        title: 'Address two',
      )
      Question.create(
        key: 'address_city',
        placeholder: 'San Francisco',
        section: section,
        style: Question.styles[:input],
        title: 'Address city',
      )
      Question.create(
        key: 'address_state',
        placeholder: 'CA',
        section: section,
        style: Question.styles[:input],
        title: 'Address state',
      )
      Question.create(
        key: 'address_zip',
        placeholder: '90474',
        section: section,
        style: Question.styles[:input],
        title: 'Address zip',
      )
      Question.create(
        key: 'shirt_size',
        options: Student.shirt_sizes.keys,
        section: section,
        style: Question.styles[:dropdown],
        title: 'Shirt size',
      )
    end
    Section.create(
      page: page,
      title: 'Emergency Contact Information',
    ) do |section|
      Question.create(
        key: 'guardian_first_name',
        placeholder: 'Kira',
        section: section,
        style: Question.styles[:input],
        title: 'Guardian first name',
      )
      Question.create(
        key: 'guardian_last_name',
        placeholder: 'Klapper',
        section: section,
        style: Question.styles[:input],
        title: 'Guardian last name',
      )
      Question.create(
        key: 'guardian_email',
        placeholder: 'kiraklapper@gmail.com',
        section: section,
        style: Question.styles[:input],
        title: 'Guardian email',
      )
      Question.create(
        key: 'guardian_relationship',
        options: Student.guardian_relationships.keys,
        section: section,
        style: Question.styles[:dropdown],
        title: 'Guardian relationship',
      )
      Question.create(
        key: 'guardian_phone_number',
        placeholder: '(555) 555-5555',
        section: section,
        style: Question.styles[:input],
        title: 'Guardian phone number',
      )
      Question.create(
        key: 'guardian_phone_type',
        options: Student.guardian_phone_types.keys,
        section: section,
        style: Question.styles[:dropdown],
        title: 'Guardian phone type',
      )
      Question.create(
        is_required: false,
        key: 'guardian_employer',
        placeholder: 'EDGE Youth Leadership',
        section: section,
        style: Question.styles[:input],
        title: 'Guardian employer',
      )
      Question.create(
        is_required: false,
        key: 'guardian_job_title',
        placeholder: 'Software Engineer',
        section: section,
        style: Question.styles[:input],
        title: 'Guardian job title',
      )
    end
  end
end
puts "Created form #{student_form.title}."
