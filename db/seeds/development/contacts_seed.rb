def generate_contact(school, is_primary)
  new_contact = Contact.create(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    is_primary: is_primary,
    last_name: Faker::Name.last_name,
    phone_number: Faker::PhoneNumber.short_phone_number,
    title: 'Principal',
    school: school,
  )
  puts "Created contact #{new_contact.full_name} for school #{school.name}."
end

School.all.each do |school|
  generate_contact(school, true)
  generate_contact(school, false)
  generate_contact(school, false)
end
