# == Schema Information
#
# Table name: forms
#
#  id         :integer          not null, primary key
#  target     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Form, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
