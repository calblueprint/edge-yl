(1..50).each do |index|
  new_school = School.create(
    address_city: Faker::Address.city,
    address_one: Faker::Address.street_address,
    address_state: Faker::Address.state,
    address_zip: Faker::Address.zip,
    contact_email: Faker::Internet.email,
    contact_first_name: Faker::Name.first_name,
    contact_last_name: Faker::Name.last_name,
    contact_phone_number: Faker::PhoneNumber.phone_number,
    contact_title: "Principle",
    name: "#{Faker::Name.first_name} High School",
    website: Faker::Internet.url('schoolweb.com'),
  )
  puts "Created school: #{new_school.name}"
end
