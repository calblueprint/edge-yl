Conference.all.each do |conference|
  (1..5).each do |index|
    new_room = Room.create(
      building: "#{Faker::Lorem.word} building",
      capacity: 20,
      conference: conference,
      gender: index % 3,
      number: index,
    )
    puts "Created room #{new_room.number} for conference #{conference.name}."
  end
end

conference = Conference.last

conference.assign_students_to_rooms
puts "Assigned students to rooms in #{conference.name}"
