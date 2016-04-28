(1..4).each do
  new_volunteer = Volunteer.create(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
  )
  puts "Created volunteer #{new_volunteer.full_name}."
end
