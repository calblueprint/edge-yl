if Rails.env.development? || Rails.env.staging?
  seeds = %w(
    users
    conferences
    schools
    contacts
    students
    groups
    rooms
    leaderships
    forms
    emails
    prospects
    comments
    responsibilities
    submissions
  )
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
end
