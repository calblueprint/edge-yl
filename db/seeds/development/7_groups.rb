@alphabet = ("a".."z").to_a

def generate_group(conference)
  new_group = Group.create(
    name: @alphabet.shift,
    conference: conference,
  )
end

(1..5).each do
  generate_group(Conference.first)
  puts 'Created group for Conference 1.'
end

Student.all.each do |student|
  group = Group.find(rand(1..5))
  student.group = group
  student.save
  puts "Assigned #{student.first_name} #{student.last_name} to group #{group.name}."
end
