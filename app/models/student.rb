# == Schema Information
#
# Table name: students
#
#  id                 :integer          not null, primary key
#  birthday           :date             not null
#  cell_phone         :string           not null
#  email              :string           not null
#  first_name         :string           not null
#  guardian_one_name  :string           not null
#  guardian_one_phone :string           not null
#  guardian_one_email :string           not null
#  guardian_two_name  :string           not null
#  guardian_two_phone :string           not null
#  guardian_two_email :string           not null
#  home_address       :string           not null
#  home_phone         :string           not null
#  last_name          :string           not null
#  school_id          :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Student < ActiveRecord::Base

  include PgSearch
  multisearchable against: [:first_name, :last_name, :email]

  belongs_to :school
  belongs_to :group

  has_many :comments, dependent: :destroy
  has_many :visits, dependent: :destroy, as: :visitable

  has_one :student_conference
  has_one :conference, through: :student_conference

  validates :cell_phone, presence: true
  validates :email, presence: true
  validates :first_name, presence: true
  validates :guardian_one_name, presence: true
  validates :guardian_one_phone, presence: true
  validates :guardian_one_email, presence: true
  validates :guardian_two_name, presence: true
  validates :guardian_two_phone, presence: true
  validates :guardian_two_email, presence: true
  validates :home_address, presence: true
  validates :last_name, presence: true

  def name
    "#{first_name} #{last_name}"
  end

end
