# == Schema Information
#
# Table name: sections
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  form_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Section, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
