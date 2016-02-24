if Rails.env.development? || Rails.env.staging?
  seeds = [
    'users',
    'schools',
    'students',
    'comments',
    'conferences',
    'contacts',
    'rooms',
    'groups',
    'leaderships',
    'forms',
    'emails',
  ]
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
end

if File.exist?('./db/data/Selection form - 1.csv')
  file = File.read('./db/data/Selection form - 1.csv')
  csv = CSV.parse(file, headers: true)
  csv.each do |row|
    School.create! address_city: row[5],
                   address_one: row[6],
                   address_two: row[8],
                   address_state: row[9],
                   address_zip: row[10],
                   name: row[1]
  end
end
