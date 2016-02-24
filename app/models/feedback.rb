# == Schema Information
#
# Table name: feedbacks
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feedback < ActiveRecord::Base

  validates :content, presence: true

  belongs_to :user

end
