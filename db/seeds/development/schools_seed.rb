(1..10).each do |index|
  new_school = School.create(
    address_city: Faker::Address.city,
    address_one: Faker::Address.street_address,
    address_state: Faker::Address.state,
    address_two: Faker::Address.street_address,
    address_zip: Faker::Address.zip,
    name: "#{Faker::Name.first_name} High School",
    website: Faker::Internet.url('schoolweb.com'),
  )
  puts "Created school #{new_school.name}."
end
