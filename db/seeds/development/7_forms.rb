new_form = Form.create(
  target: Form.targets[:student],
  title: 'Student Form',
) do |form|
  Section.create(
    form: form,
    title: 'Basic Information',
  ) do |section|
    Question.create(
      key: 'first_name',
      placeholder: 'Kira',
      section: section,
      style: Question.styles[:input],
      title: 'First Name',
    )
    Question.create(
      key: 'last_name',
      placeholder: 'Klapper',
      section: section,
      style: Question.styles[:input],
      title: 'Last Name',
    )
    Question.create(
      key: 'preferred_name',
      placeholder: 'Kira',
      section: section,
      style: Question.styles[:input],
      title: 'Preferred Name',
    )
    Question.create(
      key: 'gender',
      placeholder: 'Female',
      section: section,
      style: Question.styles[:input],
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
      title: 'Cell Phone',
    )
    Question.create(
      key: 'home_phone',
      placeholder: '(555) 555-5555',
      section: section,
      style: Question.styles[:input],
      title: 'Home Phone',
    )
    Question.create(
      key: 'home_address',
      placeholder: '213 Queen Street',
      section: section,
      style: Question.styles[:input],
      title: 'Home Address',
    )
  end
  Section.create(
    form: form,
    title: 'Emergency Contact Information',
  ) do |section|
    Question.create(
      key: 'guardian_one_name',
      placeholder: 'Kira',
      section: section,
      style: Question.styles[:input],
      title: 'Parent/Guardian One Name',
    )
    Question.create(
      key: 'guardian_one_email',
      placeholder: 'kira@gmail.com',
      section: section,
      style: Question.styles[:input],
      title: 'Parent/Guardian One Email',
    )
    Question.create(
      key: 'guardian_one_phone',
      placeholder: '(555) 555-5555',
      section: section,
      style: Question.styles[:input],
      title: 'Parent/Guardian One Email',
    )
  end
end
puts "Created form: #{new_form.title}."
