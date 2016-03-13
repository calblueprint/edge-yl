class SchoolValidator

  extend ActiveModel::Naming

  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :address_city,
                :address_one,
                :address_state,
                :address_zip,
                :alternate_student,
                :alternate_student_address_city,
                :alternate_student_address_one,
                :alternate_student_address_state,
                :alternate_student_address_two,
                :alternate_student_address_zip,
                :alternate_student_birthday,
                :alternate_student_cell_phone,
                :alternate_student_email,
                :alternate_student_first_name,
                :alternate_student_gender,
                :alternate_student_guardian_first_name,
                :alternate_student_guardian_email,
                :alternate_student_guardian_last_name,
                :alternate_student_guardian_phone_number,
                :alternate_student_guardian_phone_type,
                :alternate_student_guardian_relationship,
                :alternate_student_home_phone,
                :alternate_student_last_name,
                :alternate_student_shirt_size,
                :contact_email,
                :contact_first_name,
                :contact_last_name,
                :contact_phone_number,
                :contact_title,
                :name,
                :student_address_city,
                :student_address_one,
                :student_address_state,
                :student_address_zip,
                :student_birthday,
                :student_cell_phone,
                :student_email,
                :student_first_name,
                :student_guardian_first_name,
                :student_guardian_email,
                :student_guardian_last_name,
                :student_guardian_phone_number,
                :student_guardian_phone_type,
                :student_guardian_relationship,
                :student_home_phone,
                :student_gender,
                :student_last_name,
                :student_shirt_size

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

  validates :alternate_student_address_city, if: :page_four?, if: :alternate_student?, presence: true
  validates :alternate_student_address_one, if: :page_four?, presence: true
  validates :alternate_student_address_state, if: :page_four?, presence: true
  validates :alternate_student_address_zip, format: { with: /\A\d{5}(-\d{4})?\z/ },
                                            if: :page_four?,
                                            presence: true
  validates :alternate_student_birthday, if: :page_four?, presence: true
  validates :alternate_student_cell_phone, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                           if: :page_four?,
                                           presence: true
  validates :alternate_student_email, format: { with: /.+@.+\..+/ },
                                      if: :page_four?,
                                      presence: true
  validates :alternate_student_first_name, if: :page_four?, presence: true
  validates :alternate_student_guardian_first_name, if: :page_four?, presence: true
  validates :alternate_student_guardian_email, if: :page_four?, presence: true
  validates :alternate_student_guardian_last_name, if: :page_four?, presence: true
  validates :alternate_student_guardian_phone_number, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                                      if: :page_four?,
                                                      presence: true
  validates :alternate_student_guardian_phone_type, if: :page_four?, presence: true
  validates :alternate_student_guardian_relationship, if: :page_four?, presence: true
  validates :alternate_student_home_phone, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ },
                                           if: :page_four?,
                                           presence: true
  validates :alternate_student_gender, if: :page_four?, presence: true
  validates :alternate_student_last_name, if: :page_four?, presence: true
  validates :alternate_student_shirt_size, if: :page_four?, presence: true

  def initialize(attributes={}, page=0)
    @page = page
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  private

  def alternate_student?
    :alternate_student == true
  end
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
    @page == 4
  end


  def persisted?
    false
  end

end
