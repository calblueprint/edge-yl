# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  student_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Comment, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
