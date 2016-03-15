# == Schema Information
#
# Table name: email_threads
#
#  id         :integer          not null, primary key
#  subject    :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :email_thread do
    
  end

end
