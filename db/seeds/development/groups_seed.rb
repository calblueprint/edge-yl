def generate_group(conference)
  new_group = Group.create(
    conference: conference,
    letter: @alphabet.shift,
  )
  puts "Created #{new_group.full_name} for conference #{@conference.name}."
end

@alphabet = ('A'..'Z').to_a
@conference = Conference.first

(1..4).each do
  generate_group(@conference)
end

Student.all.each do |student|
  group = Group.find(rand(1..4))
  student.conference_id = group.conference_id
  if rand(10) > 2 # Create some students with no group, but a valid conference.
    student.group = group
  end
  student.save
  puts "Assigned student #{student.full_name} to group #{group.full_name} of conference #{group.conference.name}."
end
