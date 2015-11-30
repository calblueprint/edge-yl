# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  key         :string           not null
#  placeholder :string           not null
#  title       :string           not null
#  type        :integer          not null
#  section_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :question do
    
  end

end
