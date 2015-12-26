# == Schema Information
#
# Table name: groups
#
#  id                  :integer          not null, primary key
#  name                :string           not null
#  primary_leader_id   :integer
#  secondary_leader_id :integer
#  conference_id       :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Group < ActiveRecord::Base

  belongs_to :conference
  belongs_to :primary_leader, class_name: 'User'
  belongs_to :secondary_leader, class_name: 'User'

  has_many :students

end
