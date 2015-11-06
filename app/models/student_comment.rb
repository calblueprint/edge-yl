# == Schema Information
#
# Table name: student_comments
#
#  id         :integer          not null, primary key
#  student_id :integer
#  user_id    :integer
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class StudentComment < ActiveRecord::Base
    belongs_to :user
    belongs_to :student
end
