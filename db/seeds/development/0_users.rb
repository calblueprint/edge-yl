new_admin = User.new(
  birthday: Faker::Date.between(33.days.ago, Date.today),
  email: 'admin@edgeyl.org',
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  password: 'password',
  password_confirmation: 'password',
  is_admin: true,
)
new_admin.skip_confirmation!
new_admin.save!
puts "Created admin: #{new_admin.first_name} #{new_admin.last_name}"

(1..3).each do |n|
  new_volunteer = User.new(
    birthday: Faker::Date.between(33.days.ago, Date.today),
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: 'password',
    password_confirmation: 'password',
  )
  new_volunteer.skip_confirmation!
  new_volunteer.save!
  puts "Created volunteer: #{new_volunteer.first_name} #{new_volunteer.last_name}"
end
