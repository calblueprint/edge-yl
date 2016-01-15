(1..25).each do |index|
  new_room = Room.create(
    number: index,
  )
  puts "Created room #{new_room.number}"
end
