# == Schema Information
#
# Table name: volunteers
#
#  id         :integer          not null, primary key
#  email      :string           default(""), not null
#  first_name :string           not null
#  last_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :volunteer do
    
  end

end
