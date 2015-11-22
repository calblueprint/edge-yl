# == Schema Information
#
# Table name: student_conferences
#
#  id            :integer          not null, primary key
#  status        :integer          not null
#  conference_id :integer
#  student_id    :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do

  factory :student_conference do
    status     { 1 + rand(2) }

    conference
    student
  end

end
