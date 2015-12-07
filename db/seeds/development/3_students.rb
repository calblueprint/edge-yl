(1..50).each do |index|
  new_student = Student.create!(
    birthday: Faker::Date.between(33.days.ago, Date.today),
    cell_phone: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    gender: rand(3),
    guardian_one_name: Faker::Name.name,
    guardian_one_phone: Faker::PhoneNumber.phone_number,
    guardian_one_email: Faker::Internet.email,
    guardian_two_name: Faker::Name.name,
    guardian_two_phone: Faker::PhoneNumber.phone_number,
    guardian_two_email: Faker::Internet.email,
    home_address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    home_phone: Faker::PhoneNumber.phone_number,
    last_name: Faker::Name.last_name,
    registration_status: rand(3),
    school_id: index,
    shirt_size: rand(6),
  )
  puts "Created student: #{new_student.name}"
end
