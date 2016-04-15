# == Schema Information
#
# Table name: leaderships
#
#  id         :integer          not null, primary key
#  style      :integer          default(0), not null
#  group_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Leadership < ActiveRecord::Base

  default_scope { order('style ASC') }

  enum style: [:primary_leader, :secondary_leader]

  belongs_to :group
  belongs_to :user

end
