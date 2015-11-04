# == Schema Information
#
# Table name: schools
#
#  id              :integer          not null, primary key
#  address         :string           not null
#  counselor_email :string           not null
#  counselor_name  :string           not null
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe School, type: :model do

  it 'has a valid factory' do
    factory = FactoryGirl.build(:school)
    expect(factory).to be_valid
  end

end
