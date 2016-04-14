# == Schema Information
#
# Table name: pages
#
#  id          :integer          not null, primary key
#  description :text             not null
#  is_last     :boolean          default(FALSE), not null
#  number      :integer          not null
#  title       :string           not null
#  form_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Page, type: :model do
  pending 'add some examples to (or delete) #{__FILE__}'
end
