# == Schema Information
#
# Table name: responsibilities
#
#  id         :integer          not null, primary key
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Responsibility < ActiveRecord::Base

  enum status: [:started, :completed]

  belongs_to :student
  belongs_to :user

end
