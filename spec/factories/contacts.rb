# == Schema Information
#
# Table name: contacts
#
#  id           :integer          not null, primary key
#  email        :string           not null
#  first_name   :string           not null
#  last_name    :string           not null
#  phone_number :string           not null
#  title        :string           not null
#  is_primary   :boolean          not null
#  school_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

FactoryGirl.define do
  factory :contact do
    
  end

end
