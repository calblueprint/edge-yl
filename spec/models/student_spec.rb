# == Schema Information
#
# Table name: students
#
#  id                  :integer          not null, primary key
#  address_city        :string           not null
#  address_one         :string           not null
#  address_state       :string           not null
#  address_two         :string           not null
#  address_zip         :string           not null
#  birthday            :date             not null
#  gender              :integer          not null
#  registration_status :integer          not null
#  shirt_size          :integer          not null
#  cell_phone          :string           not null
#  email               :string           not null
#  first_name          :string           not null
#  preferred_name      :string           not null
#  guardian_one_name   :string           not null
#  guardian_one_phone  :string           not null
#  guardian_one_email  :string           not null
#  guardian_two_name   :string           not null
#  guardian_two_phone  :string           not null
#  guardian_two_email  :string           not null
#  home_phone          :string           not null
#  is_flagged          :boolean          not null
#  is_primary          :boolean          not null
#  last_name           :string           not null
#  group_id            :integer
#  school_id           :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'rails_helper'

RSpec.describe Student, type: :model do

  it "is invalid without a cell_phone" do
    factory = FactoryGirl.build(:student, cell_phone: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without an email" do
    factory = FactoryGirl.build(:student, email: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a first_name" do
    factory = FactoryGirl.build(:student, first_name: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a home_address" do
    factory = FactoryGirl.build(:student, home_address: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a last_name" do
    factory = FactoryGirl.build(:student, last_name: nil)
    expect(factory).to be_invalid
  end

end
