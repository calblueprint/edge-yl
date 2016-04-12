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
                :cell_phone,
                :current_page,
                :dietary_restrictions,
                :email,
                :emergency_consent,
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
                :home_phone,
                :immunizations,
                :last_name,
                :medical_guardian_name,
                :medications,
                :other_dietary_restrictions,
                :preferred_name,
                :psychologist_consent,
                :shirt_size

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
  validates :guardian_two_first_name, if: :page_two?, presence: true
  validates :guardian_two_email, format: ValidationConstants::EMAIL_FORMAT,
                                 if: :page_two?,
                                 presence: true
  validates :guardian_two_last_name, if: :page_two?, presence: true
  validates :guardian_two_phone_number, format: ValidationConstants::PHONE_FORMAT,
                                        if: :page_two?,
                                        presence: true
  validates :guardian_two_phone_type, if: :page_two?, presence: true
  validates :guardian_two_relationship, if: :page_two?, presence: true

  validates :allergies, if: :page_three?, presence: true
  validates :dietary_restrictions, if: :page_three?, presence: true
  validates :emergency_consent, if: :page_three?, presence: true
  validates :exercise_limitations, if: :page_three?, presence: true
  validates :health_conditions, if: :page_three?, presence: true
  validates :immunizations, if: :page_three?, presence: true
  validates :medical_guardian_name, if: :page_three?, presence: true
  validates :medications, if: :page_three?, presence: true
  validates :other_dietary_restrictions, if: :page_three?, presence: true
  validates :psychologist_consent, if: :page_three?, presence: true

  def initialize(attributes={})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  private

  def page_one?
    current_page == 1
  end

  def page_two?
    current_page == 2
  end

  def page_three?
    current_page == 3
  end

  def persisted?
    false
  end

end
