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
    'responsibilities',
    'forms',
    'emails',
  ]
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
end
