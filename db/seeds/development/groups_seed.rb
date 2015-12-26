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
  student.group = group
  student.save
  puts "Assigned #{student.full_name} to #{group.full_name}."
end
