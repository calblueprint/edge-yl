# == Schema Information
#
# Table name: forms
#
#  id         :integer          not null, primary key
#  target     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Form < ActiveRecord::Base

  has_many :sections
  has_many :questions, through: :sections

end
