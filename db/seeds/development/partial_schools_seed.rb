(1..25).each do |index|
  new_school = PartialSchool.create(
    contact_email: Faker::Internet.email,
    contact_first_name: Faker::Name.first_name,
    contact_last_name: Faker::Name.last_name,
    contact_title: 'Principal',
    name: "#{Faker::Name.first_name} High School",
    website: Faker::Internet.url('schoolweb.com'),
  )
  puts "Created school #{new_school.name}"
end
