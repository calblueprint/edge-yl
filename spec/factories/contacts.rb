# == Schema Information
#
# Table name: contacts
#
#  id           :integer          not null, primary key
#  email        :string           not null
#  first_name   :string           not null
#  is_primary   :boolean          default(FALSE), not null
#  last_name    :string           not null
#  phone_number :string           not null
#  title        :string           not null
#  school_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

FactoryGirl.define do

  factory :contact do
    email        { Faker::Internet.email }
    first_name   { Faker::Name.first_name }
    is_primary   { true }
    last_name    { Faker::Name.last_name }
    phone_number { Faker::PhoneNumber.phone_number }
    title        { 'Software Engineer' }
  end

end
