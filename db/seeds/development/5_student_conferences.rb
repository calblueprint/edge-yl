conference = Conference.first
Student.all.each do |student|
  new_student_conference = StudentConference.create(
    conference: conference,
    status: rand(3),
    student: student,
  )
  puts "Created student-conference for #{student.name}."
end
