admin = User.first

(1..10).each do |index|
  content = Faker::Lorem.sentence
  sender = Faker::Internet.email
  new_email = Email.create(
    content: content,
    from: "#{Faker::Lorem.name} <#{sender}>",
    sender: sender,
    subject: content.truncate_words(3),
    recipient: admin.email,
    to: "#{admin.full_name} <#{admin.email}>",
  )
  puts "Create email to #{new_email.to}."
end
