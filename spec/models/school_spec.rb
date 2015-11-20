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

  it "is invalid without an address" do
    factory = FactoryGirl.build(:school, address: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a counselor_email" do
    factory = FactoryGirl.build(:school, counselor_email: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a counselor_name" do
    factory = FactoryGirl.build(:school, counselor_name: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a counselor_name" do
    factory = FactoryGirl.build(:school, name: nil)
    expect(factory).to be_invalid
  end

end
