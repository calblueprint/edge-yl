# == Schema Information
#
# Table name: visits
#
#  id             :integer          not null, primary key
#  visitable_id   :integer
#  visitable_type :string
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Visit < ActiveRecord::Base

  self.default_scope { order('created_at DESC') }

  belongs_to :visitable, polymorphic: true
  belongs_to :user

end
