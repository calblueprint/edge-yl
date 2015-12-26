@alphabet = ('A'..'Z').to_a
@conference = Conference.first

def generate_group(conference)
  new_group = Group.create(
    conference: conference,
    name: @alphabet.shift,
  )
end

(1..5).each do
  generate_group(@conference)
  puts "Created group for conference #{@conference.name}."
end

Student.all.each do |student|
  group = Group.find(rand(1..5))
  student.group = group
  student.save
  puts "Assigned #{student.name} to group #{group.name}."
end
