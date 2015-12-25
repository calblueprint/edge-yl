# == Schema Information
#
# Table name: groups
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  primary_leader   :string           not null
#  secondary_leader :string           not null
#  conference_id    :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

FactoryGirl.define do
  factory :group do
    name {Faker::Team.name}
    primary_leader {Faker::Name.name}
    secondary_leader {Faker::Name.name}
  end

end
