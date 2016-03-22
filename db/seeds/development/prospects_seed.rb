(1..10).each do |index|
  new_prospect = Prospect.create(
    contact_email: Faker::Internet.email,
    contact_first_name: Faker::Name.first_name,
    contact_last_name: Faker::Name.last_name,
    name: "#{Faker::Name.first_name} High School",
    website: Faker::Internet.url('schoolweb.com'),
  )
  puts "Created prospect #{new_prospect.name}."
end
