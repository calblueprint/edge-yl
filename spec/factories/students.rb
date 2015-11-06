# == Schema Information
#
# Table name: students
#
#  id           :integer          not null, primary key
#  birthday     :date             not null
#  cell_phone   :string           not null
#  email        :string           not null
#  first_name   :string           not null
#  home_address :string           not null
#  home_phone   :string           not null
#  last_name    :string           not null
#  school_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

FactoryGirl.define do

  factory :student do
    birthday     { Faker::Date.between(33.days.ago, Date.today) }
    cell_phone   { Faker::PhoneNumber.phone_number }
    email        { Faker::Internet.email }
    first_name   { Faker::Name.first_name }
    home_address { "#{Faker::Address.street_address}, #{Faker::Address.city}" }
    home_phone   { Faker::PhoneNumber.phone_number }
    last_name    { Faker::Name.last_name }
  end

end
