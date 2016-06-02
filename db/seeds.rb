if Rails.env.development? || Rails.env.staging?
  seeds = %w(
    users
    conferences
    volunteers
    schools
    contacts
    students
    submissions
    groups
    rooms
    leaderships
    forms
    emails
    prospects
    comments
    responsibilities
  )
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
elsif Rails.env.production?
  seeds = %w(users)
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
end
