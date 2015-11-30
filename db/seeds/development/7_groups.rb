@alphabet = ("a".."z").to_a

def generate_group(conference_id)
  new_group = Group.create(
    name: @alphabet.shift,
    conference_id: conference_id,
  )
end

(1..5).each do
  generate_group(1)
  puts "Created group for Conference 1"
end

Student.all.each do |student|
  student.group = Group.find(rand(1..5))
  puts "Assigned group to #{student.first_name} #{student.last_name}."
end
