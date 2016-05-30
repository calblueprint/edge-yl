# == Schema Information
#
# Table name: students
#
#  id                            :integer          not null, primary key
#  address_city                  :string           not null
#  address_one                   :string           not null
#  address_state                 :integer          not null
#  address_two                   :string           default(""), not null
#  address_zip                   :string           not null
#  allergies                     :integer          not null
#  allergies_other               :string           default(""), not null
#  birthday                      :date             not null
#  cell_phone                    :string           not null
#  is_checked_in                 :boolean          default(FALSE), not null
#  dietary_restrictions          :string           not null
#  email                         :string           not null
#  emergency_consent             :integer          not null
#  exercise_limitations          :string           not null
#  first_name                    :string           not null
#  gender                        :integer          not null
#  guardian_one_email            :string           not null
#  guardian_one_employer         :string           default(""), not null
#  guardian_one_first_name       :string           not null
#  guardian_one_job_title        :string           default(""), not null
#  guardian_one_last_name        :string           not null
#  guardian_one_phone_number     :string           not null
#  guardian_one_phone_type       :integer          not null
#  guardian_one_relationship     :integer          not null
#  guardian_two_email            :string           default(""), not null
#  guardian_two_employer         :string           default(""), not null
#  guardian_two_first_name       :string           default(""), not null
#  guardian_two_job_title        :string           default(""), not null
#  guardian_two_last_name        :string           default(""), not null
#  guardian_two_phone_number     :string           default(""), not null
#  guardian_two_phone_type       :integer
#  guardian_two_relationship     :integer
#  health_conditions             :string           not null
#  health_conditions_description :string           default(""), not null
#  home_phone                    :string           not null
#  immunizations                 :integer          not null
#  is_flagged                    :boolean          not null
#  is_primary                    :boolean          not null
#  last_name                     :string           not null
#  medications                   :string           not null
#  other_dietary_restrictions    :string           not null
#  preferred_name                :string           default(""), not null
#  psychologist_consent          :integer          not null
#  psychologist_consent_name     :string           not null
#  shirt_size                    :integer          not null
#  submission_id                 :uuid             not null
#  conference_id                 :integer          not null
#  group_id                      :integer
#  room_id                       :integer
#  school_id                     :integer
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#

class Student < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:first_name, :last_name, :email]

  scope :conference_id, -> (conference_id) { where(conference_id: conference_id) }
  scope :gender, -> (gender) { where(gender: genders(gender.downcase)) }
  scope :has_group, lambda { |has_group|
    where(has_group == 'True' ? 'group_id IS NOT NULL' : 'group_id IS NULL')
  }
  scope :has_room, lambda { |has_room|
    where(has_room == 'True' ? 'room_id IS NOT NULL' : 'room_id IS NULL')
  }
  scope :is_checked_in, -> (is_checked_in) { where(is_checked_in: is_checked_in) }
  scope :is_flagged, -> (is_flagged) { where(is_flagged: is_flagged) }
  scope :is_primary, -> (is_primary) { where(is_primary: is_primary) }
  scope :sort, -> (sort) { order(sort) }

  def address_state
    unless self[:address_state].nil?
      EnumConstants::STATES[self[:address_state]]
    end
  end

  def address_state=(value)
    self[:address_state] = EnumConstants::STATES.index(value)
  end

  def allergies
    unless self[:allergies].nil?
      EnumConstants::BOOLEANS[self[:allergies]]
    end
  end

  def allergies=(value)
    self[:allergies] = EnumConstants::BOOLEANS.index(value)
  end

  def gender
    unless self[:gender].nil?
      EnumConstants::GENDERS[self[:gender]]
    end
  end

  def gender=(value)
    self[:gender] = EnumConstants::GENDERS.index(value)
  end

  def guardian_one_phone_type
    unless self[:guardian_one_phone_type].nil?
      EnumConstants::PHONE_TYPES[self[:guardian_one_phone_type]]
    end
  end

  def guardian_one_phone_type=(value)
    self[:guardian_one_phone_type] = EnumConstants::PHONE_TYPES.index(value)
  end

  def guardian_one_relationship
    unless self[:guardian_one_relationship].nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[self[:guardian_one_relationship]]
    end
  end

  def guardian_one_relationship=(value)
    self[:guardian_one_relationship] = EnumConstants::GUARDIAN_RELATIONSHIPS.index(value)
  end

  def guardian_two_phone_type
    unless self[:guardian_two_phone_type].nil?
      EnumConstants::PHONE_TYPES[self[:guardian_two_phone_type]]
    end
  end

  def guardian_two_phone_type=(value)
    self[:guardian_two_phone_type] = EnumConstants::PHONE_TYPES.index(value)
  end

  def guardian_two_relationship
    unless self[:guardian_two_relationship].nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[self[:guardian_two_relationship]]
    end
  end

  def guardian_two_relationship=(value)
    self[:guardian_two_relationship] = EnumConstants::GUARDIAN_RELATIONSHIPS.index(value)
  end

  def immunizations
    unless self[:immunizations].nil?
      EnumConstants::BOOLEANS[self[:immunizations]]
    end
  end

  def immunizations=(value)
    self[:immunizations] = EnumConstants::BOOLEANS.index(value)
  end

  def shirt_size
    unless self[:shirt_size].nil?
      EnumConstants::SHIRT_SIZES[self[:shirt_size]]
    end
  end

  def shirt_size=(value)
    self[:shirt_size] = EnumConstants::SHIRT_SIZES.index(value)
  end

  belongs_to :conference
  belongs_to :group
  belongs_to :school
  belongs_to :room

  has_many :comments, as: :commentable, dependent: :destroy
  has_many :emails, dependent: :destroy, as: :emailable
  has_many :visits, dependent: :destroy, as: :visitable

  validates :address_city, presence: true
  validates :address_one, presence: true
  validates :address_state, presence: true
  validates :address_zip, presence: true
  validates :allergies, presence: true
  validates :birthday, presence: true
  # validates :cell_phone, presence: true
  validates :dietary_restrictions, presence: true
  validates :email, presence: true
  validates :emergency_consent, presence: true
  validates :exercise_limitations, presence: true
  validates :first_name, presence: true
  validates :gender, presence: true
  validates :guardian_one_email, presence: true
  validates :guardian_one_first_name, presence: true
  validates :guardian_one_last_name, presence: true
  validates :guardian_one_phone_number, presence: true
  validates :guardian_one_phone_type, presence: true
  validates :guardian_one_relationship, presence: true
  validates :health_conditions, presence: true
  validates :home_phone, presence: true
  validates :immunizations, presence: true
  validates :is_flagged, inclusion: { in: [false, true] }
  validates :is_primary, inclusion: { in: [false, true] }
  validates :last_name, presence: true
  validates :medications, presence: true
  validates :psychologist_consent, presence: true
  validates :psychologist_consent_name, presence: true
  validates :shirt_size, presence: true

  def self.genders(value)
    EnumConstants::GENDERS.index(value)
  end

  def self.to_csv
    attributes = Student.attribute_names
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |student|
        csv << attributes.map { |attr| student.send(attr) }
      end
    end
  end

  def self.female
    where(gender: 0)
  end

  def self.male
    where(gender: 1)
  end

  def self.other
    where(gender: 2)
  end

  def full_name
    "#{first_name} #{last_name}"
  end

end
