Conference.all.each do |conference|
  (83..95).each do |index|
    new_room = Room.create(
      building: Faker::Commerce.color.camelcase,
      capacity: 4 + rand(2),
      conference: conference,
      gender: index % 2,
      number: index,
      style: Room.styles[:student],
    )
    puts "Created room #{new_room.full_name} for conference #{conference.name}."
  end
  Room.create(
    building: Faker::Commerce.color.camelcase,
    capacity: 2,
    conference: conference,
    gender: Room.genders[:female],
    number: 1337,
    style: Room.styles[:staff],
  )
end

conference = Conference.first

conference.assign_students_to_rooms
puts "Assigned students to rooms in #{conference.name}."
