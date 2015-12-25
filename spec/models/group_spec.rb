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

require 'rails_helper'

RSpec.describe Group, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
