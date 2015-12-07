(1..50).each do |index|
  new_student = Student.create!(
    birthday: Faker::Date.between(33.days.ago, Date.today),
    cell_phone: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    guardian_one_name: Faker::Name.name,
    guardian_one_phone: Faker::PhoneNumber.phone_number,
    guardian_one_email: Faker::Internet.email,
    guardian_two_name: Faker::Name.name,
    guardian_two_phone: Faker::PhoneNumber.phone_number,
    guardian_two_email: Faker::Internet.email,
    home_address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    home_phone: Faker::PhoneNumber.phone_number,
    is_flagged: true,
    is_primary: true,
    last_name: Faker::Name.last_name,
    school_id: index,
  )
  puts "Created student: #{new_student.name}"
end
