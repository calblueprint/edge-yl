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
                :media_information,
                :media_newspaper,
                :media_participation,
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

  validates :address_city, if: :page_one?, presence: true
  validates :address_one, if: :page_one?, presence: true
  validates :address_state, if: :page_one?, presence: true
  validates :address_zip, format: ValidationConstants::ZIP_FORMAT,
                          if: :page_one?,
                          presence: true
  validates :birthday, if: :page_one?, presence: true
  validates :cell_phone, format: ValidationConstants::PHONE_FORMAT,
                         if: :page_one?,
                         presence: true
  validates :email, format: ValidationConstants::EMAIL_FORMAT,
                    if: :page_one?,
                    presence: true
  validates :first_name, if: :page_one?, presence: true
  validates :gender, if: :page_one?, presence: true
  validates :home_phone, format: ValidationConstants::PHONE_FORMAT,
                         if: :page_one?,
                         presence: true
  validates :last_name, if: :page_one?, presence: true
  validates :shirt_size, if: :page_one?, presence: true

  validates :guardian_one_first_name, if: :page_two?, presence: true
  validates :guardian_one_email, format: ValidationConstants::EMAIL_FORMAT,
                                 if: :page_two?,
                                 presence: true
  validates :guardian_one_last_name, if: :page_two?, presence: true
  validates :guardian_one_phone_number, format: ValidationConstants::PHONE_FORMAT,
                                        if: :page_two?,
                                        presence: true
  validates :guardian_one_phone_type, if: :page_two?, presence: true
  validates :guardian_one_relationship, if: :page_two?, presence: true

  validates :allergies, if: :page_three?, presence: true
  validates :dietary_restrictions, if: :page_three?, presence: true
  validates :emergency_consent, if: :page_three?, presence: true
  validates :emergency_consent_name, if: :emergency_consent?, presence: true
  validates :exercise_limitations, if: :page_three?, presence: true
  validates :health_conditions, if: :page_three?, presence: true
  validates :immunizations, if: :page_three?, presence: true
  validates :medications, if: :page_three?, presence: true
  validates :psychologist_consent, if: :page_three?, presence: true
  validates :psychologist_consent_name, if: :psychologist_consent?, presence: true

  validates :insurance, if: :page_four?, presence: true
  validates :insurance_address, if: :has_insurance?, presence: true
  validates :insurance_address_city, if: :has_insurance?, presence: true
  validates :insurance_address_state, if: :has_insurance?, presence: true
  validates :insurance_address_zip, if: :has_insurance?, presence: true
  validates :insurance_id, if: :has_insurance?, presence: true
  validates :insurance_phone_number, if: :has_insurance?, presence: true
  validates :insurance_provider, if: :has_insurance?, presence: true

  validates :transportation, if: :page_five?, presence: true
  validates :transportation_arrival_date, if: :public_transportation?, presence: true
  validates :transportation_arrival_time, if: :public_transportation?, presence: true
  validates :transportation_carrier, if: :public_transportation?, presence: true
  validates :transportation_consent, if: :page_five?, presence: true
  validates :transportation_consent_name, if: :page_five?, presence: true
  validates :transportation_departure_date, if: :public_transportation?, presence: true
  validates :transportation_departure_time, if: :public_transportation?, presence: true
  validates :transportation_name, if: :public_transportation?, presence: true
  validates :transportation_number, if: :public_transportation?, presence: true

  validates :media_newspaper, if: :media_consent?, presence: true
  validates :media_participation, if: :page_six?, presence: true

  validates :ceremony_attendance, if: :page_seven?, presence: true
  validates :ceremony_attendance_number, numericality: { only_integer: true }

  validates :risk_guardian_consent, if: :page_eight?, presence: true
  validates :risk_guardian_date, if: :page_eight?, presence: true
  validates :risk_guardian_email, if: :page_eight?, presence: true
  validates :risk_guardian_name, if: :page_eight?, presence: true
  validates :risk_guardian_relationship, if: :page_eight?, presence: true
  validates :risk_student_consent, if: :page_eight?, presence: true
  validates :risk_student_date, if: :page_eight?, presence: true
  validates :risk_student_email, if: :page_eight?, presence: true
  validates :risk_student_name, if: :page_eight?, presence: true

  validates :participation_guardian_consent, if: :page_nine?, presence: true
  validates :participation_guardian_name, if: :page_nine?, presence: true
  validates :participation_student_consent, if: :page_nine?, presence: true
  validates :participation_student_name, if: :page_nine?, presence: true

  def initialize(attributes={})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  private

  def emergency_consent?
    emergency_consent == EnumConstants::BOOLEANS[0]
  end

  def has_insurance?
    insurance == EnumConstants::BOOLEANS[0]
  end

  def media_consent?
    media_participation == EnumConstants::BOOLEANS[0]
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
