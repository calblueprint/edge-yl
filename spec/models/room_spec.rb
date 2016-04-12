# == Schema Information
#
# Table name: rooms
#
#  id            :integer          not null, primary key
#  building      :string           not null
#  capacity      :integer          not null
#  gender        :integer          not null
#  number        :integer          not null
#  style         :integer          not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Room, type: :model do
  it 'is invalid without a number' do
    factory = FactoryGirl.build(:room, number: nil)
    expect(factory).to be_invalid
  end
end
