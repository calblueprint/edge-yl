# == Schema Information
#
# Table name: feedbacks
#
#  id         :integer          not null, primary key
#  content    :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feedback < ActiveRecord::Base

  belongs_to :user
  validates :content, presence: true

end
