# == Schema Information
#
# Table name: conferences
#
#  id         :integer          not null, primary key
#  end_date   :date             not null
#  location   :string           not null
#  name       :string           not null
#  start_date :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conference < ActiveRecord::Base

  self.default_scope { order('created_at DESC') }

  has_many :groups, dependent: :destroy
  has_many :rooms, dependent: :destroy

  validates :end_date, presence: true
  validates :location, presence: true
  validates :name, presence: true
  validates :start_date, presence: true

end
