def generate_comment(commentable_id, commentable_type)
  new_comment = Comment.create(
    commentable_id: commentable_id,
    commentable_type: commentable_type,
    content: Faker::Lorem.paragraph,
    user_id: 1 + rand(4),
  )
end

School.all.each do |school|
  generate_comment(school.id, 'School')
  generate_comment(school.id, 'School')
  puts "Created comments for school #{school.name}."
end

Student.all.each do |student|
  generate_comment(student.id, 'Student')
  generate_comment(student.id, 'Student')
  puts "Created comments for student #{student.full_name}."
end

Prospect.all.each do |prospect|
  generate_comment(prospect.id, 'Prospect')
  generate_comment(prospect.id, 'Prospect')
  puts "Created comments for prospect #{prospect.name}."
end
