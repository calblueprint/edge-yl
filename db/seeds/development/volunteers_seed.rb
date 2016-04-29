Conference.all.each do |conference|
  (1..4).each do
    new_volunteer = Volunteer.create(
      conference: conference,
      email: Faker::Internet.email,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
    )
    puts "Created volunteer #{new_volunteer.full_name} for conference #{conference.name}."
  end
end
