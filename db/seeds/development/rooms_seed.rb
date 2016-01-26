conference = Conference.first

(1..5).each do |index|
  new_room = Room.create(
    capacity: 3,
    conference: conference,
    gender: rand(3),
    number: index,
  )
  puts "Created room #{new_room.number} for conference #{conference.name}."
end

conference = Conference.last

(6..10).each do |index|
  new_room = Room.create(
    capacity: 2,
    conference: conference,
    gender: rand(3),
    number: index,
  )
  puts "Created room #{new_room.number} for conference #{conference.name}."
end
