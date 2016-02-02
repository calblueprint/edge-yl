# == Schema Information
#
# Table name: emails
#
#  id             :integer          not null, primary key
#  content        :string           not null
#  from           :string           not null
#  sender         :string           not null
#  subject        :string           not null
#  recipient      :string           not null
#  to             :string           not null
#  emailable_id   :integer
#  emailable_type :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

FactoryGirl.define do
  factory :email do
    
  end

end
