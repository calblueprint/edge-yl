(1..25).each do |index|
  new_student_comment1 = StudentComment.create(
    content: "#{Faker::Lorem.sentence}",
    user_id: 1,
    student_id: index,
  )
  new_student_comment2 = StudentComment.create(
    content: "#{Faker::Lorem.sentence}",
    user_id: 1,
    student_id: index,
  )
  puts "Created 2 Comments for Student #{new_student_comment1.student_id}"
end
