if Rails.env.development? || Rails.env.staging?
  seeds = [
    'users',
    'schools',
    'students',
    'conferences',
    'rooms',
    'groups',
    'leaderships',
    'comments',
    'responsibilities',
    'forms',
  ]
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
end
