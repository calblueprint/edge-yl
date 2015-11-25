# == Schema Information
#
# Table name: visits
#
#  id             :integer          not null, primary key
#  visitable_id   :integer
#  visitable_type :string
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'rails_helper'

RSpec.describe Visit, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
