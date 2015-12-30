# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  content          :string           not null
#  commentable_id   :integer
#  commentable_type :string
#  user_id          :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ActiveRecord::Base

  belongs_to :commentable, polymorphic: true
  belongs_to :user

  validates :content, presence: true

end
