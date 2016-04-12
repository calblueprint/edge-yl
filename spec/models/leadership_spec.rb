# == Schema Information
#
# Table name: leaderships
#
#  id         :integer          not null, primary key
#  style      :integer          default(0), not null
#  group_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Leadership, type: :model do
  pending 'add some examples to (or delete) #{__FILE__}'
end
