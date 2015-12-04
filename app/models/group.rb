# == Schema Information
#
# Table name: groups
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Group < ActiveRecord::Base

  belongs_to :conference

  has_many :students

end
