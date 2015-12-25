student_form = Form.create(
  target: Form.targets[:student],
  title: 'Student Form',
) do |form|
  Section.create(
    form: form,
    title: 'General Information',
  ) do |section|
    Question.create(
      is_required: true,
      key: 'first_name',
      placeholder: 'Kira',
      section: section,
      style: Question.styles[:input],
      title: 'First name',
    )
    Question.create(
      is_required: true,
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
      is_required: true,
      key: 'gender',
      options: ['Female', 'Male', 'Other'],
      section: section,
      style: Question.styles[:dropdown],
      title: 'Gender',
    )
    Question.create(
      is_required: true,
      key: 'birthday',
      placeholder: '01/01/96',
      section: section,
      style: Question.styles[:input],
      title: 'Birthday',
    )
    Question.create(
      is_required: true,
      key: 'email',
      placeholder: 'kiraklapper@gmail.com',
      section: section,
      style: Question.styles[:input],
      title: 'Email',
    )
    Question.create(
      is_required: true,
      key: 'cell_phone',
      placeholder: '(555) 555-5555',
      section: section,
      style: Question.styles[:input],
      title: 'Cell phone',
    )
    Question.create(
      is_required: true,
      key: 'home_phone',
      placeholder: '(555) 555-5555',
      section: section,
      style: Question.styles[:input],
      title: 'Home phone',
    )
    Question.create(
      is_required: true,
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
      is_required: true,
      key: 'address_city',
      placeholder: 'San Francisco',
      section: section,
      style: Question.styles[:input],
      title: 'Address city',
    )
    Question.create(
      is_required: true,
      key: 'address_state',
      placeholder: 'CA',
      section: section,
      style: Question.styles[:input],
      title: 'Address state',
    )
    Question.create(
      is_required: true,
      key: 'address_zip',
      placeholder: '90474',
      section: section,
      style: Question.styles[:input],
      title: 'Address ZIP',
    )
    Question.create(
      is_required: true,
      key: 'shirt_size',
      options: ['S', 'M', 'L', 'XL', 'XXL', 'Other'],
      section: section,
      style: Question.styles[:dropdown],
      title: 'Shirt size',
    )
  end
  Section.create(
    form: form,
    title: 'Emergency Contact Information',
  ) do |section|
    Question.create(
      is_required: true,
      key: 'guardian_one_name',
      placeholder: 'Kira',
      section: section,
      style: Question.styles[:input],
      title: 'Parent/Guardian One Name',
    )
    Question.create(
      is_required: true,
      key: 'guardian_one_email',
      placeholder: 'kira@gmail.com',
      section: section,
      style: Question.styles[:input],
      title: 'Parent/Guardian One Email',
    )
    Question.create(
      is_required: true,
      key: 'guardian_one_phone',
      placeholder: '(555) 555-5555',
      section: section,
      style: Question.styles[:input],
      title: 'Parent/Guardian One Email',
    )
  end
end
puts "Created form: #{student_form.title}."
