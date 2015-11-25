# == Schema Information
#
# Table name: responsibilities
#
#  id         :integer          not null, primary key
#  status     :integer          not null
#  student_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Responsibility, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
