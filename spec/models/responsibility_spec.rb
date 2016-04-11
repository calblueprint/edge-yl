# == Schema Information
#
# Table name: responsibilities
#
#  id            :integer          not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  conference_id :integer          not null
#  school_id     :integer          not null
#  user_id       :integer
#

require 'rails_helper'

RSpec.describe Responsibility, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
