# == Schema Information
#
# Table name: school_submissions
#
#  id                                      :uuid             not null, primary key
#  address_city                            :string
#  address_one                             :string
#  address_state                           :integer
#  address_two                             :string           default("")
#  address_zip                             :string
#  alternate_student_address_city          :string
#  alternate_student_address_one           :string
#  alternate_student_address_state         :string
#  alternate_student_address_two           :string           default("")
#  alternate_student_address_zip           :string
#  alternate_student_birthday              :date
#  alternate_student_cell_phone            :string
#  alternate_student_email                 :string
#  alternate_student_first_name            :string
#  alternate_student_gender                :integer
#  alternate_student_guardian_first_name   :string
#  alternate_student_guardian_email        :string
#  alternate_student_guardian_last_name    :string
#  alternate_student_guardian_phone_number :string
#  alternate_student_guardian_phone_type   :integer
#  alternate_student_guardian_relationship :integer
#  alternate_student_home_phone            :string
#  alternate_student_last_name             :string
#  alternate_student_shirt_size            :integer
#  contact_email                           :string
#  contact_first_name                      :string
#  contact_last_name                       :string
#  contact_phone_number                    :string
#  contact_title                           :string
#  current_page                            :integer          default(0), not null
#  has_alternate_student                   :integer
#  is_active                               :boolean          default(TRUE), not null
#  name                                    :string
#  student_address_city                    :string
#  student_address_one                     :string
#  student_address_state                   :string
#  student_address_two                     :string           default("")
#  student_address_zip                     :string
#  student_birthday                        :date
#  student_cell_phone                      :string
#  student_email                           :string
#  student_first_name                      :string
#  student_gender                          :integer
#  student_guardian_first_name             :string
#  student_guardian_email                  :string
#  student_guardian_last_name              :string
#  student_guardian_phone_number           :string
#  student_guardian_phone_type             :integer
#  student_guardian_relationship           :integer
#  student_home_phone                      :string
#  student_last_name                       :string
#  student_shirt_size                      :integer
#  website                                 :string           default("")
#

class SchoolSubmission < ActiveRecord::Base

  enum student_gender: [:female, :male, :other]
  enum student_guardian_phone_type: [:cell, :home, :work]
  enum student_guardian_relationship: [
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
  enum student_shirt_size: [:S, :M, :L, :XL, :XXL]

  before_validation :validate_page, on: [:create, :update]

  BOOLEANS = %w(yes no)
  STATES = %w(
    AL AK AZ AR CA CO CT DE FL GA
    HI ID IL IN IA KS KY LA ME MD
    MA MI MN MS MO MT NE NV NH NJ
    NM NY NC ND OH OK OR PA RI SC
    SD TN TX UT VT VA WA WV WI WY
  )

  def address_state
    if !read_attribute(:address_state).nil?
      STATES[read_attribute(:address_state)]
    end
  end

  def address_state=(value)
    write_attribute(:address_state, STATES.index(value))
  end

  def has_alternate_student
    if !read_attribute(:has_alternate_student).nil?
      BOOLEANS[read_attribute(:has_alternate_student)]
    end
  end

  def has_alternate_student=(value)
    write_attribute(:has_alternate_student, BOOLEANS.index(value))
  end

  def submit_submission
    school = School.new(
      address_city: address_city,
      address_one: address_one,
      address_state: address_state,
      address_two: address_two,
      address_zip: address_zip,
      name: name,
      website: website,
    )
    if school.save
      contact = Contact.new(
        email: contact_email,
        first_name: contact_first_name,
        last_name: contact_last_name,
        is_primary: true,
        phone_number: contact_phone_number,
        title: contact_title,
        school: school,
      )
      student_submission = StudentSubmission.new(
        address_city: student_address_city,
        address_one: student_address_one,
        address_state: student_address_state,
        address_two: student_address_two,
        address_zip: student_address_zip,
        birthday: student_birthday,
        cell_phone: student_cell_phone,
        email: student_email,
        first_name: student_first_name,
        gender: student_gender,
        guardian_first_name: student_guardian_first_name,
        guardian_email: student_guardian_email,
        guardian_last_name: student_guardian_last_name,
        guardian_phone_number: student_guardian_phone_number,
        guardian_phone_type: student_guardian_phone_type,
        guardian_relationship: student_guardian_relationship,
        home_phone: student_home_phone,
        last_name: student_last_name,
        shirt_size: student_shirt_size,
      )
      if has_alternate_student == BOOLEANS[0]
        alternate_student_submission = StudentSubmission.new(
          address_city: alternate_student_address_city,
          address_one: alternate_student_address_one,
          address_state: alternate_student_address_state,
          address_two: alternate_student_address_two,
          address_zip: alternate_student_address_zip,
          birthday: alternate_student_birthday,
          cell_phone: alternate_student_cell_phone,
          email: alternate_student_email,
          first_name: alternate_student_first_name,
          gender: alternate_student_gender,
          guardian_first_name: alternate_student_guardian_first_name,
          guardian_email: alternate_student_guardian_email,
          guardian_last_name: alternate_student_guardian_last_name,
          guardian_phone_number: alternate_student_guardian_phone_number,
          guardian_phone_type: alternate_student_guardian_phone_type,
          guardian_relationship: alternate_student_guardian_relationship,
          home_phone: alternate_student_home_phone,
          last_name: alternate_student_last_name,
          shirt_size: alternate_student_shirt_size,
        )
      end
      if contact.save && student_submission.save && (has_alternate_student == BOOLEANS[1] || alternate_student_submission.save) &&
        SchoolMailer.create(school).deliver_now &&
        StudentMailer.create(student_submission).deliver_now &&
        (has_alternate_student == BOOLEANS[1] || StudentMailer.create(alternate_student_submission).deliver_now)
        self.is_active = false
        self.save
      end
    end
  end

  private

  def attributes_one
    {
      address_city: address_city,
      address_one: address_one,
      address_state: address_state,
      address_zip: address_zip,
      name: name,
    }
  end

  def attributes_two
    {
      contact_email: contact_email,
      contact_first_name: contact_first_name,
      contact_last_name: contact_last_name,
      contact_phone_number: contact_phone_number,
      contact_title: contact_title,
    }
  end

  def attributes_three
    {
      student_address_city: student_address_city,
      student_address_one: student_address_one,
      student_address_state: student_address_state,
      student_address_zip: student_address_zip,
      student_birthday: student_birthday,
      student_cell_phone: student_cell_phone,
      student_email: student_email,
      student_first_name: student_first_name,
      student_gender: student_gender,
      student_guardian_first_name: student_guardian_first_name,
      student_guardian_email: student_guardian_email,
      student_guardian_last_name: student_guardian_last_name,
      student_guardian_phone_number: student_guardian_phone_number,
      student_guardian_phone_type: student_guardian_phone_type,
      student_guardian_relationship: student_guardian_relationship,
      student_home_phone: student_home_phone,
      student_last_name: student_last_name,
      student_shirt_size: student_shirt_size,
    }
  end

  def attributes_four
    {
      alternate_student_address_city: alternate_student_address_city,
      alternate_student_address_one: alternate_student_address_one,
      alternate_student_address_state: alternate_student_address_state,
      alternate_student_address_zip: alternate_student_address_zip,
      alternate_student_birthday: alternate_student_birthday,
      alternate_student_cell_phone: alternate_student_cell_phone,
      alternate_student_email: alternate_student_email,
      alternate_student_first_name: alternate_student_first_name,
      alternate_student_gender: alternate_student_gender,
      alternate_student_guardian_first_name: alternate_student_guardian_first_name,
      alternate_student_guardian_email: alternate_student_guardian_email,
      alternate_student_guardian_last_name: alternate_student_guardian_last_name,
      alternate_student_guardian_phone_number: alternate_student_guardian_phone_number,
      alternate_student_guardian_phone_type: alternate_student_guardian_phone_type,
      alternate_student_guardian_relationship: alternate_student_guardian_relationship,
      alternate_student_home_phone: alternate_student_home_phone,
      alternate_student_last_name: alternate_student_last_name,
      alternate_student_shirt_size: alternate_student_shirt_size,
    }
  end

  def validate_page
    if is_active
      attributes_hash = {
        1 => attributes_one,
        2 => attributes_two,
        3 => attributes_three,
        4 => attributes_four,
      }
      if current_page != 4 || has_alternate_student == BOOLEANS[0]
        current_attributes = attributes_hash[current_page]
        validator = SchoolValidator.new(current_attributes, current_page)
        validator.valid?
        response = validator.errors.to_hash
        response.each do |attribute, messages|
          messages.each do |message|
            self.errors.add(attribute, message)
          end
        end
      end
    end
  end

end
