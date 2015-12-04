# == Schema Information
#
# Table name: groups
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  primary_leader   :string
#  secondary_leader :string
#  conference_id    :integer          not null
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
