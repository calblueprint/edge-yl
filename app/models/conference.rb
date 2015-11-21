# == Schema Information
#
# Table name: conferences
#
#  id         :integer          not null, primary key
#  end_data   :date             not null
#  location   :string           not null
#  start_date :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conference < ActiveRecord::Base
end
