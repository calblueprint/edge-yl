(1..25).each do |n|
  new_school = School.create(
    address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    counselor_email: Faker::Internet.email,
    counselor_name: "#{Faker::Name.first_name}, #{Faker::Name.last_name}",
    name: "#{Faker::Name.first_name} High School",
  )
  puts "Created school: #{new_school.name}"
end
