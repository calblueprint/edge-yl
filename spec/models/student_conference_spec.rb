# == Schema Information
#
# Table name: student_conferences
#
#  id            :integer          not null, primary key
#  status        :integer          not null
#  conference_id :integer
#  student_id    :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe StudentConference, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
