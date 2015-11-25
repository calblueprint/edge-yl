def generate_responsibility()
  new_responsibility = Responsibility.create(
    status: "completed",
  )
end

User.all.each do |user|
  generate_responsibility()
  puts "Created responsibility for #{user.first_name} #{user.last_name}."
end
