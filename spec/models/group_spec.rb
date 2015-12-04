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

require 'rails_helper'

RSpec.describe Group, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
