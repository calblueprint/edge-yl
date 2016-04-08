def generate_group(alphabet, conference)
  new_group = Group.create(
    conference: conference,
    letter: alphabet.shift,
  )
  puts "Created #{new_group.full_name} for conference #{conference.name}."
end

Conference.all.each do |conference|
  alphabet = ('A'..'Z').to_a
  (1..4).each do
    generate_group(alphabet, conference)
  end
end

conference = Conference.first
conference.assign_students_to_groups
puts "Assigned students to groups in #{conference.name}."
