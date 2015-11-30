form_params = {
  target: Form.target_types[:student],
  title: 'New Student',
}
new_form = Form.create(form_params) do |form|

  section_params = {
    form: form,
    title: 'Basic Information',
  }
  Section.create(section_params) do |section|

    Question.create(
      key: 'first_name',
      placeholder: 'Kira',
      title: 'First Name',
      section: section,
      style: Block.style_type[:input],
    )

    Question.create(
      key: 'last_name',
      placeholder: 'Klapper',
      title: 'Last Name',
      section: section,
      style: Block.style_type[:input],
    )
  end
end

puts "Created form: #{new_form.title}."
