Conference.all.each do |conference|
  (81..99).each do |index|
    new_room = Room.create(
      building: "#{Faker::Lorem.word}",
      capacity: 9 + rand(4),
      conference: conference,
      gender: index % 3,
      number: index,
    )
    puts "Created room #{new_room.full_name} for conference #{conference.name}."
  end
end

conference = Conference.first

conference.assign_students_to_rooms
puts "Assigned students to rooms in #{conference.name}."
