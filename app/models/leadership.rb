# == Schema Information
#
# Table name: leaderships
#
#  id         :integer          not null, primary key
#  is_primary :boolean          not null
#  group_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Leadership < ActiveRecord::Base

  belongs_to :group
  belongs_to :user

  validates_associated :group

end
