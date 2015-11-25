# == Schema Information
#
# Table name: visits
#
#  id         :integer          not null, primary key
#  category   :integer
#  target     :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Visit < ActiveRecord::Base

  self.default_scope { order('created_at DESC') }

  enum category: [:school, :student]

  belongs_to :user

end
