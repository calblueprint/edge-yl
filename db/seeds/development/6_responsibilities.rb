def generate_responsibility(student_id)
  new_responsibility = Responsibility.create(
    status: "completed",
    student_id: student_id,
    user_id: 1 + rand(4),
  )
end

Student.all.each do |student|
  generate_responsibility(student.id)
  puts "Created responsibility for #{student.first_name} #{student.last_name}."
end
