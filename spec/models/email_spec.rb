# == Schema Information
#
# Table name: emails
#
#  id         :integer          not null, primary key
#  content    :string           not null
#  from       :string           not null
#  sender     :string           not null
#  subject    :string           not null
#  recipient  :string           not null
#  to         :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Email, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
