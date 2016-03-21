if Rails.env.development? || Rails.env.staging?
  seeds = [
    'users',
    'conferences',
    'schools',
    'contacts',
    'students',
    'comments',
    'groups',
    'rooms',
    'leaderships',
    'forms',
    'emails',
    'partial_schools',
  ]
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
end

if File.exist?('./db/data/schools_seed.csv')
  file = File.read('./db/data/schools_seed.csv')
  csv = CSV.parse(file, headers: true)
  csv.each do |row|
    school = School.create(
     address_city: row[8],
     address_one: row[6],
     address_two: row[7],
     address_state: row[9],
     address_zip: row[10],
     name: row[1],
    )
    contact = Contact.create(
      email: row[11],
      first_name: row[2],
      is_primary: true,
      last_name: row[3],
      phone_number: row[12],
      school: school,
      title: row[4],
    )
  end
end
