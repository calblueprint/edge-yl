class SchoolValidator

  extend ActiveModel::Naming

  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :address_city,
                :address_one,
                :address_state,
                :address_zip,
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
                :student_first_name,
                :student_home_phone,
                :student_gender,
                :student_last_name,
                :student_shirt_size

  validates :address_city, if: :page_one?, presence: true
  validates :address_one, if: :page_one?, presence: true
  validates :address_state, if: :page_one?, presence: true
  validates :address_zip, if: :page_one?, presence: true
  validates :name, if: :page_one?, presence: true

  validates :contact_email, if: :page_two?, presence: true
  validates :contact_first_name, if: :page_two?, presence: true
  validates :contact_last_name, if: :page_two?, presence: true
  validates :contact_phone_number, if: :page_two?, presence: true
  validates :contact_title, if: :page_two?, presence: true

  validates :student_address_city, if: :page_three?, presence: true
  validates :student_address_one, if: :page_three?, presence: true
  validates :student_address_state, if: :page_three?, presence: true
  validates :student_address_zip, if: :page_three?, presence: true
  validates :student_birthday, if: :page_three?, presence: true
  validates :student_cell_phone, if: :page_three?, presence: true
  validates :student_first_name, if: :page_three?, presence: true
  validates :student_home_phone, if: :page_three?, presence: true
  validates :student_gender, if: :page_three?, presence: true
  validates :student_last_name, if: :page_three?, presence: true
  validates :student_shirt_size,  if: :page_three?, presence: true

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
