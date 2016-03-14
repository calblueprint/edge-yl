# == Schema Information
#
# Table name: partial_schools
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  contact_email      :string           not null
#  contact_first_name :string           not null
#  contact_last_name  :string           not null
#  website            :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'rails_helper'

RSpec.describe PartialSchool, type: :model do

  it "is invalid without a name" do
    factory = FactoryGirl.build(:partial_school, name: nil)
    expect(factory).to be_invalid
  end

end
