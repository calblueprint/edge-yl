# == Schema Information
#
# Table name: responsibilities
#
#  id            :integer          not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  conference_id :integer          not null
#  school_id     :integer          not null
#  user_id       :integer
#

class Responsibility < ActiveRecord::Base

  belongs_to :conference
  belongs_to :school
  belongs_to :user

end
