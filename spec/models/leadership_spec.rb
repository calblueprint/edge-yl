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

require 'rails_helper'

RSpec.describe Leadership, type: :model do
  pending 'add some examples to (or delete) #{__FILE__}'
end
