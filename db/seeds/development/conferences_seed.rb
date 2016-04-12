(1..2).each do |index|
  new_conference = Conference.create(
    end_date: Faker::Date.forward(5),
    location: 'University of California, Berkeley',
    name: "EDGE #{Time.zone.today.year + index}",
    start_date: Faker::Date.forward(1),
  )
  puts "Created conference #{new_conference.name}."
end
