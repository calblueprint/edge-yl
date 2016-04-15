inactive_conference = Conference.create(
  end_date: Faker::Date.backward(3),
  location: 'University of California, Berkeley',
  name: "EDGE #{Time.zone.today.year}",
  start_date: Faker::Date.backward(1),
)
puts "Created inactive conference #{inactive_conference.name}."

active_conference = Conference.create(
  end_date: Faker::Date.forward(9),
  location: 'University of California, Berkeley',
  name: "EDGE #{Time.zone.today.year}",
  start_date: Faker::Date.forward(7),
)
puts "Created active conference #{active_conference.name}."
