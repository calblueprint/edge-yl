conference = Conference.first
Student.all.each do |student|
  new_student_conference = StudentConference.create(
    status: 0,
    conference_id: conference.id,
    student_id: student.id,
  )
  puts "Created student-conference for #{student.full_name}."
end
