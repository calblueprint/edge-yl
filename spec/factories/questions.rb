# == Schema Information
#
# Table name: questions
#
#  id            :integer          not null, primary key
#  description   :string           default(""), not null
#  enabler_key   :string
#  enabler_value :string
#  format        :integer          not null
#  is_required   :boolean          default(TRUE), not null
#  key           :string           not null
#  options       :string           default([]), not null, is an Array
#  placeholder   :string           default(""), not null
#  style         :integer          not null
#  title         :string           not null
#  page_id       :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
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
