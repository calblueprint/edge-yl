# == Schema Information
#
# Table name: email_threads
#
#  id         :integer          not null, primary key
#  subject    :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe EmailThread, type: :model do
  pending 'add some examples to (or delete) #{__FILE__}'
end
