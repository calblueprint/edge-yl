(1..10).each do
  new_prospect = Prospect.create(
    contact_email: Faker::Internet.email,
    contact_first_name: Faker::Name.first_name,
    contact_last_name: Faker::Name.last_name,
    contact_phone: Faker::Base.numerify('###-###-####'),
    name: "#{Faker::Name.first_name} High School",
    priority: rand(5) + 1,
    website: Faker::Internet.url('schoolweb.com'),
  )
  puts "Created prospect #{new_prospect.name}."
end
