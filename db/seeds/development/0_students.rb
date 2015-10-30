(1..25).each do |n|
  new_student = Student.create(
    birthday: Faker::Date.between(33.days.ago, Date.today),
    cell_phone: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    home_address: '#{Faker::Address.street_address}, #{Faker::Address.city}',
    home_phone: Faker::PhoneNumber.phone_number,
    last_name: Faker::Name.last_name,
  )
  puts 'Created student: #{new_student.full_name}'
end
