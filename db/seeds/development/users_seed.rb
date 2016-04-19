new_admin = User.new(
  email: 'registration@edgeyl.org',
  first_name: Faker::Name.first_name,
  is_admin: true,
  last_name: Faker::Name.last_name,
  password: 'password',
  password_confirmation: 'password',
)
new_admin.skip_confirmation!
new_admin.save
puts "Created admin #{new_admin.full_name}"

(1..3).each do
  new_user = User.new(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: 'password',
    password_confirmation: 'password',
  )
  new_user.skip_confirmation!
  new_user.save
  puts "Created volunteer #{new_user.full_name}."
end
