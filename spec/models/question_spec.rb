# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  key         :string           not null
#  placeholder :string           not null
#  style       :integer          not null
#  title       :string           not null
#  section_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Question, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
