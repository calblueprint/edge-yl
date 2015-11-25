def generate_comment(student_id)
  new_comment = Comment.create(
    content: "#{Faker::Lorem.sentence}",
    user_id: 1 + rand(4),
    student_id: student_id,
  )
end

Student.all.each do |student|
  generate_comment(student.id)
  generate_comment(student.id)
  puts "Created comments for #{student.name}."
end
