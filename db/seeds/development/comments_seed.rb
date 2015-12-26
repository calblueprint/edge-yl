def generate_comment(student)
  new_comment = Comment.create(
    content: "#{Faker::Lorem.sentence}",
    student: student,
    user_id: 1 + rand(4),
  )
end

Student.all.each do |student|
  generate_comment(student)
  generate_comment(student)
  puts "Created comments for #{student.full_name}."
end
