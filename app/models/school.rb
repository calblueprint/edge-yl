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

  validates :address_city, presence: true
  validates :address_one, presence: true
  validates :address_state, presence: true
  validates :address_two, presence: false
  validates :address_zip, presence: true
  validates :contact_email, presence: true
  validates :contact_first_name, presence: true
  validates :contact_last_name, presence: true
  validates :contact_phone_number, presence: true
  validates :contact_title, presence: true
  validates :name, presence: true
  validates :website, presence: true

end

