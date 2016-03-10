# == Schema Information
#
# Table name: students
#
#  id                         :integer          not null, primary key
#  address_city               :string           not null
#  address_one                :string           not null
#  address_state              :string           not null
#  address_two                :string           default(""), not null
#  address_zip                :string           not null
#  allergies                  :integer          not null
#  birthday                   :date             not null
#  cell_phone                 :string           not null
#  dietary_restrictions       :integer          not null
#  other_dietary_restrictions :string           not null
#  email                      :string           not null
#  emergency_consent          :integer          not null
#  exercise_limitations       :string           not null
#  first_name                 :string           not null
#  gender                     :integer          not null
#  guardian_email             :string           not null
#  guardian_employer          :string           default(""), not null
#  guardian_first_name        :string           not null
#  guardian_job_title         :string           default(""), not null
#  guardian_last_name         :string           not null
#  guardian_phone_number      :string           not null
#  guardian_phone_type        :integer          not null
#  guardian_relationship      :integer          not null
#  health_conditions          :integer          not null
#  home_phone                 :string           not null
#  immunizations              :integer          not null
#  is_flagged                 :boolean          not null
#  is_primary                 :boolean          not null
#  last_name                  :string           not null
#  medical_guardian_name      :string           not null
#  medications                :string           not null
#  preferred_name             :string           default(""), not null
#  psychologist_consent       :integer          not null
#  registration_status        :integer          not null
#  shirt_size                 :integer          not null
#  conference_id              :integer
#  group_id                   :integer
#  room_id                    :integer
#  school_id                  :integer
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#

class Student < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:first_name, :last_name, :email]

  scope :conference_id, -> conference_id { where(conference_id: conference_id) }
  scope :gender, -> gender { where(gender: genders[gender.downcase]) }
  scope :is_flagged, -> is_flagged { where(is_flagged: is_flagged) }
  scope :is_primary, -> is_primary { where(is_primary: is_primary) }
  scope :sort, -> sort { order(sort) }

  enum boolean: [:yes, :no]
  enum gender: [:female, :male, :other]
  enum dietary_restriction: [:dairy_free, :gluten_free, :None, :nut_allergy, :vegan, :vegetarian]
  enum guardian_phone_type: [:cell, :home, :work]
  enum guardian_relationship: [
    :mother,
    :father,
    :aunt,
    :uncle,
    :grandmother,
    :grandfather,
    :stepmother,
    :stepfather,
    :guardian,
  ]
  enum registration_status: [:registered, :selected, :dropped]
  enum shirt_size: [:S, :M, :L, :XL, :XXL]

  belongs_to :group
  belongs_to :school
  belongs_to :room

  has_many :comments, as: :commentable, dependent: :destroy
  has_many :emails, dependent: :destroy, as: :emailable
  has_many :visits, dependent: :destroy, as: :visitable

  has_one :conference, through: :group

  before_validation :set_initials, on: :create
  validates :address_city, presence: true
  validates :address_one, presence: true
  validates :address_state, presence: true
  validates :address_two, presence: true
  validates :address_zip, presence: true
  validates :allergies, presence: true
  validates :birthday, presence: true
  validates :cell_phone, presence: true
  validates :dietary_restrictions, presence: true
  validates :email, presence: true
  validates :emergency_consent, presence: true
  validates :exercise_limitations, presence: true
  validates :first_name, presence: true
  validates :gender, presence: true
  validates :guardian_email, presence: true
  validates :guardian_first_name, presence: true
  validates :guardian_last_name, presence: true
  validates :guardian_phone_number, presence: true
  validates :guardian_phone_type, presence: true
  validates :guardian_relationship, presence: true
  validates :health_conditions, presence: true
  validates :home_phone, presence: true
  validates :immunizations, presence: true
  validates :is_flagged, inclusion: { in: [false, true] }
  validates :is_primary, inclusion: { in: [false, true] }
  validates :last_name, presence: true
  validates :medical_guardian_name, presence: true
  validates :medications, presence: true
  validates :psychologist_consent, presence: true
  validates :other_dietary_restrictions, presence: true
  validates :shirt_size, presence: true

  def self.to_csv
    attributes = Student.attribute_names
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |student|
        csv << attributes.map{ |attr| student.send(attr) }
      end
    end
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  private

  def set_initials
    self.is_flagged = false
    self.is_primary = true
    self.registration_status = 0
  end

end
