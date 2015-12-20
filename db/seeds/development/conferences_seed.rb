new_conference = Conference.create(
  end_date: Faker::Date.backward(1),
  location: 'University of California, Berkeley',
  name: 'EDGE 2015',
  start_date: Faker::Date.forward(2),
)
puts "Created conference: #{new_conference.name}"
