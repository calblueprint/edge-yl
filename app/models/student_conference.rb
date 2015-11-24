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

class StudentConference < ActiveRecord::Base

  enum status: [:selected, :registered, :dropped]

  belongs_to :conference
  belongs_to :student

end
