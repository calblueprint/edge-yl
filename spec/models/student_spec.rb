# == Schema Information
#
# Table name: students
#
#  id                    :integer          not null, primary key
#  address_city          :string           not null
#  address_one           :string           not null
#  address_state         :string           not null
#  address_two           :string           default(""), not null
#  address_zip           :string           not null
#  birthday              :date             not null
#  cell_phone            :string           not null
#  email                 :string           not null
#  first_name            :string           not null
#  gender                :integer          not null
#  guardian_email        :string           not null
#  guardian_employer     :string           default(""), not null
#  guardian_first_name   :string           not null
#  guardian_job_title    :string           default(""), not null
#  guardian_last_name    :string           not null
#  guardian_phone_number :string           not null
#  guardian_phone_type   :integer          not null
#  guardian_relationship :integer          not null
#  home_phone            :string           not null
#  is_flagged            :boolean          not null
#  is_primary            :boolean          not null
#  last_name             :string           not null
#  preferred_name        :string           default(""), not null
#  registration_status   :integer          not null
#  shirt_size            :integer          not null
#  group_id              :integer
#  room_id               :integer
#  school_id             :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

require 'rails_helper'

RSpec.describe Student, type: :model do

  it "is invalid without a first_name" do
    factory = FactoryGirl.build(:student, first_name: nil)
    expect(factory).to be_invalid
  end

  it "is invalid without a last_name" do
    factory = FactoryGirl.build(:student, last_name: nil)
    expect(factory).to be_invalid
  end

end
