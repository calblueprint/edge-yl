# == Schema Information
#
# Table name: prospects
#
#  id                 :integer          not null, primary key
#  contact_email      :string           not null
#  contact_first_name :string           not null
#  contact_last_name  :string           not null
#  contact_phone      :string           not null
#  name               :string           not null
#  priority           :integer          not null
#  website            :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'rails_helper'

RSpec.describe Prospect, type: :model do

  it "is invalid without a name" do
    factory = FactoryGirl.build(:prospect, name: nil)
    expect(factory).to be_invalid
  end

end
