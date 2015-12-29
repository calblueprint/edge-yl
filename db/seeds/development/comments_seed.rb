def generate_comment(id, type)
  new_comment = Comment.create(
    commentable_id: "#{id}",
    commentable_type: type,
    content: "#{Faker::Lorem.sentence}",
    user_id: 1 + rand(4),
  )
end

Student.all.each do |student|
  generate_comment(student.id, "Student")
  generate_comment(student.id, "Student")
  puts "Created comments for #{student.full_name}."
end

School.all.each do |school|
  generate_comment(school.id, "School")
  generate_comment(school.id, "School")
  puts "Created comments for #{school.name} High School."
end
