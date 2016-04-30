def generate_group(conference)
  new_group = Group.create(
    conference_id: conference.id,
  )
  puts "Created #{new_group.full_name} for conference #{conference.name}."
end

Conference.all.each do |conference|
  (1..4).each do
    generate_group(conference)
  end
end

conference = Conference.first
conference.assign_students_to_groups
puts "Assigned students to groups in #{conference.name}."
