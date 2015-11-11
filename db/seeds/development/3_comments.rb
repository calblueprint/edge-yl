def generate_comment(student_id)
  new_comment = Comment.create(
    content: "#{Faker::Lorem.sentence}",
    user_id: 1 + rand(4),
    student_id: student_id,
  )
end

(1..25).each do |index|
  student = Student.find(index)
  generate_comment(index)
  generate_comment(index)
  puts "Created comments for #{student.first_name} #{student.last_name}."
end
