# == Schema Information
#
# Table name: schools
#
#  id              :integer          not null, primary key
#  address         :string           not null
#  counselor_email :string           not null
#  counselor_name  :string           not null
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class School < ActiveRecord::Base

  include PgSearch
  multisearchable against: [:name]

  has_many :students
  has_many :visits, dependent: :destroy, as: :visitable

  validates :address, presence: true
  validates :counselor_email, presence: true
  validates :counselor_name, presence: true
  validates :name, presence: true

end

