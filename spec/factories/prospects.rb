# == Schema Information
#
# Table name: prospects
#
#  id                 :integer          not null, primary key
#  contact_email      :string           not null
#  contact_first_name :string           not null
#  contact_last_name  :string           not null
#  contact_phone      :string           not null
#  name               :string           not null
#  priority           :integer          not null
#  website            :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

FactoryGirl.define do

  factory :prospect do
    contact_email         { Faker::Internet.email }
    contact_first_name    { Faker::Name.first_name }
    contact_last_name     { Faker::Name.last_name }
    contact_phone         { Faker::Base.numerify('###-###-####') }
    name                  { "#{Faker::Name.first_name} High School" }
    priority              { rand(5) + 1 }
    website               { Faker::Internet.url('schoolweb.com') }
  end

end
