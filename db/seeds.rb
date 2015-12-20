if Rails.env.development? || Rails.env.staging?
  seeds = [
    'users',
    'conferences',
    'schools',
    'students',
    'comments',
    'responsibilities',
    'groups',
    'forms',
  ]
  seeds.each do |seed|
    load File.join(Rails.root, 'db/seeds/development', "#{seed}_seed.rb")
  end
end
