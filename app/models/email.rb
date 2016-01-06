# == Schema Information
#
# Table name: emails
#
#  id         :integer          not null, primary key
#  content    :string           not null
#  sender     :string           not null
#  subject    :string           not null
#  receiver   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Email < ActiveRecord::Base

end
