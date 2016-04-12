admin = User.first

(1..3).each do
  if [true, false].sample
    school = School.offset(rand(School.count)).first
    email = school.primary_contact.email
    id = school.id
    name = school.primary_contact.full_name
    type = School.name
  else
    student = Student.offset(rand(Student.count)).first
    email = student.email
    id = student.id
    name = student.full_name
    type = Student.name
  end
  bool = [true, false].sample
  subject = bool ? Faker::Company.catch_phrase.humanize : Faker::Commerce.department
  new_email = Email.create(
    content: Faker::Lorem.paragraph(4, true),
    emailable_id: id,
    emailable_type: type,
    from: "#{name} <#{email}>",
    is_sent: true,
    recipient: "#{admin.username}@test.edge.org",
    sender: email,
    subject: subject,
    to: "#{admin.full_name} <#{admin.username}@test.edge.org>",
    user: admin,
  )
  puts "Create email from admin #{new_email.from}."
end
