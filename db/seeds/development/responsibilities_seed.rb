def generate_responsibility(student)
  new_responsibility = Responsibility.create(
    status: rand(2),
    user_id: 1 + rand(4),
  )
end
