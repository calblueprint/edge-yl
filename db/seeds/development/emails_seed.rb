admin = User.first

(1..10).each do |index|
  sender = Faker::Internet.email
  new_email = Email.create(
    content: Faker::Lorem.sentence,
    from: "#{Faker::Lorem.name} <#{sender}>",
    sender: sender,
    subject: "#{Faker::Hacker.noun} #{Faker::Hacker.verb} #{Faker::Hacker.noun}",
    recipient: admin.email,
    to: "#{admin.full_name} <#{admin.email}>",
  )
  puts "Create email to #{new_email.to}."
end
