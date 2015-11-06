# == Schema Information
#
# Table name: students
#
#  id           :integer          not null, primary key
#  birthday     :date             not null
#  cell_phone   :string           not null
#  email        :string           not null
#  first_name   :string           not null
#  home_address :string           not null
#  home_phone   :string           not null
#  last_name    :string           not null
#  school_id_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'rails_helper'

RSpec.describe Student, type: :model do

  it 'has a valid factory' do
    factory = FactoryGirl.build(:student)
    expect(factory).to be_valid
  end

  it "is invalid without an email" do
    factory = FactoryGirl.build(:student, email: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a first_name" do
    factory = FactoryGirl.build(:student, first_name: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a last_name" do
    factory = FactoryGirl.build(:student, last_name: nil)
    expect(factory).to be_invalid
  end

end
