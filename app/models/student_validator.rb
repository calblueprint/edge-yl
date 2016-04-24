class StudentValidator

  extend ActiveModel::Naming

  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :address_zip,
                :address_city,
                :address_one,
                :address_state,
                :address_two,
                :allergies,
                :allergies_other,
                :birthday,
                :carpool,
                :cell_phone,
                :ceremony_attendance,
                :ceremony_attendance_number,
                :current_page,
                :dietary_restrictions,
                :email,
                :emergency_consent,
                :emergency_consent_name,
                :exercise_limitations,
                :first_name,
                :gender,
                :guardian_one_email,
                :guardian_one_employer,
                :guardian_one_first_name,
                :guardian_one_job_title,
                :guardian_one_last_name,
                :guardian_one_phone_number,
                :guardian_one_phone_type,
                :guardian_one_relationship,
                :guardian_two_email,
                :guardian_two_employer,
                :guardian_two_first_name,
                :guardian_two_job_title,
                :guardian_two_last_name,
                :guardian_two_phone_number,
                :guardian_two_phone_type,
                :guardian_two_relationship,
                :health_conditions,
                :health_conditions_description,
                :home_phone,
                :immunizations,
                :insurance,
                :insurance_address,
                :insurance_address_city,
                :insurance_address_state,
                :insurance_address_zip,
                :insurance_id,
                :insurance_phone_number,
                :insurance_provider,
                :insurance_other,
                :last_name,
                :medications,
                :other_dietary_restrictions,
                :participation_guardian_consent,
                :participation_guardian_name,
                :participation_student_consent,
                :participation_student_name,
                :preferred_name,
                :psychologist_consent,
                :psychologist_consent_name,
                :risk_guardian_consent,
                :risk_guardian_date,
                :risk_guardian_email,
                :risk_guardian_name,
                :risk_guardian_relationship,
                :risk_student_consent,
                :risk_student_date,
                :risk_student_email,
                :risk_student_name,
                :shirt_size,
                :transportation,
                :transportation_arrival_date,
                :transportation_arrival_time,
                :transportation_carrier,
                :transportation_consent,
                :transportation_consent_name,
                :transportation_departure_date,
                :transportation_departure_time,
                :transportation_name,
                :transportation_number
  validates :current_page, presence: true

  validates :address_city, if: :page_one?, presence: true
  validates :address_one, if: :page_one?, presence: true
  validates :address_state, if: :page_one?, presence: true
  validates :address_zip, format: ValidationConstants::ZIP_FORMAT,
                          if: :page_one?,
                          presence: true
  validates :name, if: :page_one?, presence: true

  validates :contact_email, format: ValidationConstants::EMAIL_FORMAT,
                            if: :page_two?,
                            presence: true
  validates :contact_first_name, if: :page_two?, presence: true
  validates :contact_last_name, if: :page_two?, presence: true
  validates :contact_phone_number, format: ValidationConstants::PHONE_FORMAT,
                                   if: :page_two?,
                                   presence: true
  validates :contact_title, if: :page_two?, presence: true

  validates :primary_address_city, if: :page_three?, presence: true
  validates :primary_address_one, if: :page_three?, presence: true
  validates :primary_address_state, if: :page_three?, presence: true
  validates :primary_address_zip, format: ValidationConstants::ZIP_FORMAT,
                                  if: :page_three?,
                                  presence: true
  validates :primary_birthday, if: :page_three?, presence: true
  validates :primary_cell_phone, format: ValidationConstants::PHONE_FORMAT,
                                 if: :page_three?,
                                 presence: true
  validates :primary_email, format: ValidationConstants::EMAIL_FORMAT,
                            if: :page_three?,
                            presence: true
  validates :primary_first_name, if: :page_three?, presence: true
  validates :primary_guardian_first_name, if: :page_three?, presence: true
  validates :primary_guardian_email, format: { with: /.+@.+\..+/ },
                                     if: :page_three?,
                                     presence: true
  validates :primary_guardian_last_name, if: :page_three?, presence: true
  validates :primary_guardian_phone_number, format: ValidationConstants::PHONE_FORMAT,
                                            if: :page_three?,
                                            presence: true
  validates :primary_guardian_phone_type, if: :page_three?, presence: true
  validates :primary_guardian_relationship, if: :page_three?, presence: true
  validates :primary_home_phone, format: ValidationConstants::PHONE_FORMAT,
                                 if: :page_three?,
                                 presence: true
  validates :primary_gender, if: :page_three?, presence: true
  validates :primary_last_name, if: :page_three?, presence: true
  validates :primary_shirt_size, if: :page_three?, presence: true

  validates :has_alternate_student, if: :page_four?, presence: true
  validates :alternate_address_city, if: :has_alternate?, presence: true
  validates :alternate_address_one, if: :has_alternate?, presence: true
  validates :alternate_address_state, if: :has_alternate?, presence: true
  validates :alternate_address_zip, format: ValidationConstants::ZIP_FORMAT,
                                    if: :has_alternate?,
                                    presence: true
  validates :alternate_birthday, if: :has_alternate?, presence: true
  validates :alternate_cell_phone, format: ValidationConstants::PHONE_FORMAT,
                                   if: :has_alternate?,
                                   presence: true
  validates :alternate_email, format: ValidationConstants::EMAIL_FORMAT,
                              if: :has_alternate?,
                              presence: true
  validates :alternate_first_name, if: :has_alternate?, presence: true
  validates :alternate_guardian_first_name, if: :has_alternate?, presence: true
  validates :alternate_guardian_email, if: :has_alternate?, presence: true
  validates :alternate_guardian_last_name, if: :has_alternate?, presence: true
  validates :alternate_guardian_phone_number, format: ValidationConstants::PHONE_FORMAT,
                                              if: :has_alternate?,
                                              presence: true
  validates :alternate_guardian_phone_type, if: :has_alternate?, presence: true
  validates :alternate_guardian_relationship, if: :has_alternate?, presence: true
  validates :alternate_home_phone, format: ValidationConstants::PHONE_FORMAT,
                                   if: :has_alternate?,
                                   presence: true
  validates :alternate_gender, if: :has_alternate?, presence: true
  validates :alternate_last_name, if: :has_alternate?, presence: true
  validates :alternate_shirt_size, if: :has_alternate?, presence: true

  def initialize(attributes={})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  private

  def allergies?
    allergies == EnumConstants::BOOLEANS[0]
  end

  def emergency_consent?
    emergency_consent == EnumConstants::BOOLEANS[0]
  end

  def has_insurance?
    insurance == EnumConstants::BOOLEANS[0]
  end

  def page_one?
    current_page == 1
  end

  def page_two?
    current_page == 2
  end

  def page_three?
    current_page == 3
  end

  def page_four?
    current_page == 4
  end

  def page_five?
    current_page == 5
  end

  def page_six?
    current_page == 6
  end

  def page_seven?
    current_page == 7
  end

  def page_eight?
    current_page == 8
  end

  def page_nine?
    current_page == 9
  end

  def parent_attendance?
    ceremony_attendance == EnumConstants::CEREMONY_OPTIONS[0] ||
      ceremony_attendance == EnumConstants::CEREMONY_OPTIONS[1]
  end

  def persisted?
    false
  end

  def psychologist_consent?
    psychologist_consent == EnumConstants::BOOLEANS[0]
  end

  def public_transportation?
    transportation == EnumConstants::TRANSPORTATION_OPTIONS[2] ||
      transportation == EnumConstants::TRANSPORTATION_OPTIONS[3] ||
      transportation == EnumConstants::TRANSPORTATION_OPTIONS[4]
  end

end
