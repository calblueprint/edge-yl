# == Schema Information
#
# Table name: rooms
#
#  id            :integer          not null, primary key
#  number        :integer          not null
#  conference_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Room, type: :model do

  it "is invalid without a number" do
    factory = FactoryGirl.build(:room, number: nil)
    expect(factory).to be_invalid
  end

end
