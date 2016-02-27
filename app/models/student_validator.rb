class StudentValidator

  extend ActiveModel::Naming

  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :first_name, :last_name, :gender, :birthday, :email, :cell_phone,
                :home_phone, :address_one, :address_two, :address_city, :address_state,
                :address_zip, :shirt_size, :guardian_first_name, :guardian_last_name,
                :guardian_email, :guardian_relationship, :guardian_phone_number,
                :guardian_phone_type, :immunizations, :allergies, :health_conditions,
                :medications, :dietary_restrictions, :other_dietary_restrictions,
                :exercise_limitations, :emergency_consent, :psychologist_consent,
                :medical_guardian_name

  validates :address_city, if: :page_one?, presence: true
  validates :address_one, if: :page_one?, presence: true
  validates :address_state, if: :page_one?, presence: true
  validates :address_two, if: :page_one?, presence: true
  validates :address_zip, if: :page_one?, presence: true
  validates :birthday, if: :page_one?, presence: true
  validates :cell_phone, if: :page_one?, presence: true
  validates :email, if: :page_one?, presence: true
  validates :first_name, if: :page_one?, presence: true
  validates :gender, if: :page_one?, presence: true
  validates :home_phone, if: :page_one?, presence: true
  validates :last_name, if: :page_one?, presence: true
  validates :shirt_size, if: :page_one?, presence: true

  validates :guardian_first_name, if: :page_two?, presence: true
  validates :guardian_email, if: :page_two?, presence: true
  validates :guardian_last_name, if: :page_two?, presence: true
  validates :guardian_phone_number, if: :page_two?, presence: true
  validates :guardian_phone_type, if: :page_two?, presence: true
  validates :guardian_relationship, if: :page_two?, presence: true

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

  def initialize(attributes={}, page=0)
    @page = page
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  private

  def page_one?
    @page == 1
  end

  def page_two?
    @page == 2
  end

  def page_three?
    @page == 3
  end

  def persisted?
    false
  end

end
