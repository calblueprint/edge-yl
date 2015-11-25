conference = Conference.first
Student.all.each do |student|
  new_student_conference = StudentConference.create(
    status: rand(3),
    conference_id: conference.id,
    student_id: student.id,
  )
  puts "Created student-conference for #{student.name}."
end
