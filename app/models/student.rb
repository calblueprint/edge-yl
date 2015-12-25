# == Schema Information
#
# Table name: students
#
#  id                    :integer          not null, primary key
#  address_city          :string           not null
#  address_one           :string           not null
#  address_state         :string           not null
#  address_two           :string           default(""), not null
#  address_zip           :string           not null
#  birthday              :date             not null
#  cell_phone            :string           not null
#  email                 :string           not null
#  first_name            :string           not null
#  gender                :integer          not null
#  guardian_email        :string           not null
#  guardian_employer     :string           default(""), not null
#  guardian_first_name   :string           not null
#  guardian_job_title    :string           default(""), not null
#  guardian_last_name    :string           not null
#  guardian_phone_number :string           not null
#  guardian_phone_type   :integer          not null
#  guardian_relationship :integer          not null
#  home_phone            :string           not null
#  is_flagged            :boolean          not null
#  is_primary            :boolean          not null
#  last_name             :string           not null
#  preferred_name        :string           default(""), not null
#  registration_status   :integer          not null
#  shirt_size            :integer          not null
#  group_id              :integer
#  school_id             :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Student < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:first_name, :last_name, :email]

  belongs_to :group
  belongs_to :school

  enum gender: [:Female, :Male, :Other]
  enum guardian_phone_type: [:Cell, :Home, :Work]
  enum guardian_relationship: [
    :Mother,
    :Father,
    :Aunt,
    :Uncle,
    :Grandmother,
    :Grandfather,
    :Stepmother,
    :Stepfather,
    :Guardian,
  ]
  enum registration_status: [:Registered, :Selected, :Dropped]
  enum shirt_size: [:S, :M, :L, :XL, :XXL]

  has_many :comments, dependent: :destroy
  has_many :visits, dependent: :destroy, as: :visitable

  has_one :conference, through: :group

  before_validation :set_initials, on: :create

  validates :address_city, presence: true
  validates :address_one, presence: true
  validates :address_state, presence: true
  validates :address_zip, presence: true
  validates :birthday, presence: true
  validates :cell_phone, presence: true
  validates :email, presence: true
  validates :first_name, presence: true
  validates :gender, presence: true
  validates :guardian_email, presence: true
  validates :guardian_first_name, presence: true
  validates :guardian_last_name, presence: true
  validates :guardian_phone_number, presence: true
  validates :guardian_phone_type, presence: true
  validates :guardian_relationship, presence: true
  validates :is_flagged, inclusion: { in: [false, true] }
  validates :is_primary, inclusion: { in: [false, true] }
  validates :home_phone, presence: true
  validates :last_name, presence: true

  def name
    "#{first_name} #{last_name}"
  end

  private

  def set_initials
    self.is_flagged = false
    self.is_primary = true
    self.registration_status = Student.registration_statuses[:Registered]
  end

end
