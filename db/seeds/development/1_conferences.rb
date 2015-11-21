new_conference = Conference.create(
  end_date: Faker::Date.backward(1),
  location: 'University of California, Berkeley',
  start_date: Faker::Date.forward(2),
)
puts "Create conference: #{new_conference.start_date} - #{new_conference.end_date}"
