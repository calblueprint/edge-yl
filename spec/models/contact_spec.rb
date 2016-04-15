# == Schema Information
#
# Table name: contacts
#
#  id           :integer          not null, primary key
#  email        :string           not null
#  first_name   :string           not null
#  is_primary   :boolean          default(FALSE), not null
#  last_name    :string           not null
#  phone_number :string           not null
#  title        :string           default("")
#  school_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'rails_helper'

RSpec.describe Contact, type: :model do
  pending 'add some examples to (or delete) #{__FILE__}'
end
