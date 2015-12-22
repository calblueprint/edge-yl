# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  is_required :boolean          not null
#  options     :string           not null, is an Array
#  key         :string           not null
#  placeholder :string           not null
#  style       :integer          not null
#  title       :string           not null
#  section_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do

  factory :question do
    is_required { true }
    key         { 'first_name' }
    title       { 'First name' }
    placeholder { 'Kira' }
    style       { Question.styles['input'] }
  end

end
