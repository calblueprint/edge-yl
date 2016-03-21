(1..2).each do |index|
  new_conference = Conference.create(
    end_date: Faker::Date.backward(1),
    location: 'University of California, Berkeley',
    name: "EDGE #{Date.today.year + index}",
    start_date: Faker::Date.forward(2),
  )
  puts "Created conference #{new_conference.name}."
end
