# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  content          :text             not null
#  commentable_id   :integer
#  commentable_type :string
#  user_id          :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'rails_helper'

RSpec.describe Comment, type: :model do
  it 'is invalid without content' do
    factory = FactoryGirl.build(:comment, content: nil)
    expect(factory).to be_invalid
  end
end
