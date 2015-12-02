form_params = {
  target: Form.targets[:student],
  title: 'Student Form',
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
  end
end
puts "Created form: #{new_form.title}."
