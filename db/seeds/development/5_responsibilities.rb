def generate_responsibility(student)
  new_responsibility = Responsibility.create(
    status: rand(2),
    student: student,
    user_id: 1 + rand(4),
  )
end

Student.all.each do |student|
  generate_responsibility(student)
  puts "Created responsibility for #{student.name}."
end
