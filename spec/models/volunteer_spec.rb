# == Schema Information
#
# Table name: volunteers
#
#  id            :integer          not null, primary key
#  email         :string           default(""), not null
#  first_name    :string           not null
#  last_name     :string           not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Volunteer, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
