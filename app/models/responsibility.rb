# == Schema Information
#
# Table name: responsibilities
#
#  id         :integer          not null, primary key
#  status     :integer          not null
#  student_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Responsibility < ActiveRecord::Base

  enum status: [:started, :completed]

  belongs_to :student
  belongs_to :user

end
