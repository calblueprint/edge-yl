# == Schema Information
#
# Table name: students
#
#  id           :integer          not null, primary key
#  birthday     :date             not null
#  cell_phone   :string           not null
#  email        :string           not null
#  first_name   :string           not null
#  home_address :string           not null
#  home_phone   :string           not null
#  last_name    :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'rails_helper'

RSpec.describe Student, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
