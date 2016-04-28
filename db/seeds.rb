if Rails.env.development? || Rails.env.staging?
  seeds = %w(
    users
    volunteers
    conferences
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
end
