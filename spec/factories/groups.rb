# == Schema Information
#
# Table name: groups
#
#  id            :integer          not null, primary key
#  name          :string
#  conference_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :group do
    name {Faker::Team.name}
  end

end
