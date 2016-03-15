class SchoolValidator

  extend ActiveModel::Naming

  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :address_city,
                :address_one,
                :address_state,
                :address_zip,
                :alternate_address_city,
                :alternate_address_one,
                :alternate_address_state,
                :alternate_address_two,
                :alternate_address_zip,
                :alternate_birthday,
                :alternate_cell_phone,
                :alternate_email,
                :alternate_first_name,
                :alternate_gender,
                :alternate_guardian_first_name,
                :alternate_guardian_email,
                :alternate_guardian_last_name,
                :alternate_guardian_phone_number,
                :alternate_guardian_phone_type,
                :alternate_guardian_relationship,
                :alternate_home_phone,
                :alternate_last_name,
                :alternate_shirt_size,
                :contact_email,
                :contact_first_name,
                :contact_last_name,
                :contact_phone_number,
                :contact_title,
                :has_alternate_student,
                :name,
                :primary_address_city,
                :primary_address_one,
                :primary_address_state,
                :primary_address_zip,
                :primary_birthday,
                :primary_cell_phone,
                :primary_email,
                :primary_first_name,
                :primary_guardian_first_name,
                :primary_guardian_email,
                :primary_guardian_last_name,
                :primary_guardian_phone_number,
                :primary_guardian_phone_type,
                :primary_guardian_relationship,
                :primary_home_phone,
                :primary_gender,
                :primary_last_name,
                :primary_shirt_size

  validates :address_city, if: :page_one?, presence: true
  validates :address_one, if: :page_one?, presence: true
  validates :address_state, if: :page_one?, presence: true
  validates :address_zip, format: { with: /\A\d{5}(-\d{4})?\z/ },
                          if: :page_one?,
                          presence: true
  validates :name, if: :page_one?, presence: true

  validates :contact_email, format: { with: /.+@.+\..+/ },
                            if: :page_two?,
                            presence: true
  validates :contact_first_name, if: :page_two?, presence: true
  validates :contact_last_name, if: :page_two?, presence: true
  validates :contact_phone_number, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                   if: :page_two?,
                                   presence: true
  validates :contact_title, if: :page_two?, presence: true

  validates :student_address_city, if: :page_three?, presence: true
  validates :student_address_one, if: :page_three?, presence: true
  validates :student_address_state, if: :page_three?, presence: true
  validates :student_address_zip, format: { with: /\A\d{5}(-\d{4})?\z/ },
                                  if: :page_three?,
                                  presence: true
  validates :student_birthday, if: :page_three?, presence: true
  validates :student_cell_phone, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                 if: :page_three?,
                                 presence: true
  validates :student_email, format: { with: /.+@.+\..+/ },
                            if: :page_three?,
                            presence: true
  validates :student_first_name, if: :page_three?, presence: true
  validates :student_guardian_first_name, if: :page_three?, presence: true
  validates :student_guardian_email, format: { with: /.+@.+\..+/ },
                                     if: :page_three?,
                                     presence: true
  validates :student_guardian_last_name, if: :page_three?, presence: true
  validates :student_guardian_phone_number, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                            if: :page_three?,
                                            presence: true
  validates :student_guardian_phone_type, if: :page_three?, presence: true
  validates :student_guardian_relationship, if: :page_three?, presence: true
  validates :student_home_phone, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                 if: :page_three?,
                                 presence: true
  validates :student_gender, if: :page_three?, presence: true
  validates :student_last_name, if: :page_three?, presence: true
  validates :student_shirt_size, if: :page_three?, presence: true

  validates :alternate_address_city, if: :page_four?, presence: true
  validates :alternate_address_one, if: :page_four?, presence: true
  validates :alternate_address_state, if: :page_four?, presence: true
  validates :alternate_address_zip, format: { with: /\A\d{5}(-\d{4})?\z/ },
                                            if: :page_four?,
                                            presence: true
  validates :alternate_birthday, if: :page_four?, presence: true
  validates :alternate_cell_phone, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                           if: :page_four?,
                                           presence: true
  validates :alternate_email, format: { with: /.+@.+\..+/ },
                                      if: :page_four?,
                                      presence: true
  validates :alternate_first_name, if: :page_four?, presence: true
  validates :alternate_guardian_first_name, if: :page_four?, presence: true
  validates :alternate_guardian_email, if: :page_four?, presence: true
  validates :alternate_guardian_last_name, if: :page_four?, presence: true
  validates :alternate_guardian_phone_number, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                                      if: :page_four?,
                                                      presence: true
  validates :alternate_guardian_phone_type, if: :page_four?, presence: true
  validates :alternate_guardian_relationship, if: :page_four?, presence: true
  validates :alternate_home_phone, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                           if: :page_four?,
                                           presence: true
  validates :alternate_gender, if: :page_four?, presence: true
  validates :alternate_last_name, if: :page_four?, presence: true
  validates :alternate_shirt_size, if: :page_four?, presence: true

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

  def page_four?
    @page == 4 && has_alternate_student == SchoolSubmission::BOOLEANS[0]
  end

  def persisted?
    false
  end

end
