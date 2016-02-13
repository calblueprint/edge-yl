admin = User.first

(1..10).each do |index|
  if [true,false].sample
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
  new_email = Email.create(
    content: Faker::Lorem.sentence,
    emailable_id: id,
    emailable_type: type,
    from: "#{name} <#{email}>",
    is_sent: true,
    sender: email,
    subject: "#{Faker::Hacker.noun} #{Faker::Hacker.verb} #{Faker::Hacker.noun}".humanize,
    recipient: admin.email,
    to: "#{admin.full_name} <#{admin.email}>",
    user: admin,
  )
  puts "Create email from #{new_email.from}."
end
