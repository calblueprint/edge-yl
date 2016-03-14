# == Schema Information
#
# Table name: partial_schools
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  contact_email      :string           not null
#  contact_first_name :string           not null
#  contact_last_name  :string           not null
#  website            :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

FactoryGirl.define do

  factory :partial_school do
    contact_email         { Faker::Internet.email }
    contact_first_name    { Faker::Name.first_name }
    contact_last_name     { Faker::Name.last_name }
    name                  { "#{Faker::Name.first_name} High School" }
    website               { Faker::Internet.url('schoolweb.com') }
  end

end
