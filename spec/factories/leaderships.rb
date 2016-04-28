# == Schema Information
#
# Table name: leaderships
#
#  id                  :integer          not null, primary key
#  style               :integer          default(0), not null
#  group_id            :integer
#  leadershipable_id   :integer
#  leadershipable_type :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

FactoryGirl.define do
  factory :leadership do
  end
end
