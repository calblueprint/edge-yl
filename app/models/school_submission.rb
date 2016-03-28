# == Schema Information
#
# Table name: school_submissions
#
#  id                              :uuid             not null, primary key
#  address_city                    :string
#  address_one                     :string
#  address_state                   :integer          default(4)
#  address_two                     :string           default("")
#  address_zip                     :string
#  alternate_address_city          :string
#  alternate_address_one           :string
#  alternate_address_state         :integer          default(4)
#  alternate_address_two           :string           default("")
#  alternate_address_zip           :string
#  alternate_birthday              :date
#  alternate_cell_phone            :string
#  alternate_email                 :string
#  alternate_first_name            :string
#  alternate_gender                :integer
#  alternate_guardian_first_name   :string
#  alternate_guardian_email        :string
#  alternate_guardian_last_name    :string
#  alternate_guardian_phone_number :string
#  alternate_guardian_phone_type   :integer
#  alternate_guardian_relationship :integer
#  alternate_home_phone            :string
#  alternate_last_name             :string
#  alternate_shirt_size            :integer
#  contact_email                   :string
#  contact_first_name              :string
#  contact_last_name               :string
#  contact_phone_number            :string
#  contact_title                   :string
#  current_page                    :integer          default(0), not null
#  has_alternate_student           :integer
#  is_active                       :boolean          default(TRUE), not null
#  name                            :string
#  primary_address_city            :string
#  primary_address_one             :string
#  primary_address_state           :integer          default(4)
#  primary_address_two             :string           default("")
#  primary_address_zip             :string
#  primary_birthday                :date
#  primary_cell_phone              :string
#  primary_email                   :string
#  primary_first_name              :string
#  primary_gender                  :integer
#  primary_guardian_first_name     :string
#  primary_guardian_email          :string
#  primary_guardian_last_name      :string
#  primary_guardian_phone_number   :string
#  primary_guardian_phone_type     :integer
#  primary_guardian_relationship   :integer
#  primary_home_phone              :string
#  primary_last_name               :string
#  primary_shirt_size              :integer
#  website                         :string           default("")
#

class SchoolSubmission < ActiveRecord::Base

  validates :current_page, presence: true
  validates :is_active, inclusion: { in: [false, true] }

  def address_state
    if !read_attribute(:address_state).nil?
      EnumConstants::STATES[read_attribute(:address_state)]
    end
  end

  def address_state=(value)
    write_attribute(:address_state, EnumConstants::STATES.index(value))
  end

  def alternate_address_state
    if !read_attribute(:alternate_address_state).nil?
      EnumConstants::STATES[read_attribute(:alternate_address_state)]
    end
  end

  def alternate_address_state=(value)
    write_attribute(:alternate_address_state, EnumConstants::STATES.index(value))
  end

  def alternate_guardian_phone_type
    if !read_attribute(:alternate_guardian_phone_type).nil?
      EnumConstants::PHONE_TYPES[read_attribute(:alternate_guardian_phone_type)]
    end
  end

  def alternate_guardian_phone_type=(value)
    write_attribute(:alternate_guardian_phone_type, EnumConstants::PHONE_TYPES.index(value))
  end

  def alternate_guardian_relationship
    if !read_attribute(:alternate_guardian_relationship).nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[read_attribute(:alternate_guardian_relationship)]
    end
  end

  def alternate_guardian_relationship=(value)
    write_attribute(:alternate_guardian_relationship, EnumConstants::GUARDIAN_RELATIONSHIPS.index(value))
  end

  def alternate_shirt_size
    if !read_attribute(:alternate_shirt_size).nil?
      EnumConstants::SHIRT_SIZES[read_attribute(:alternate_shirt_size)]
    end
  end

  def alternate_shirt_size=(value)
    write_attribute(:alternate_shirt_size, EnumConstants::SHIRT_SIZES.index(value))
  end

  def has_alternate_student
    if !read_attribute(:has_alternate_student).nil?
      EnumConstants::BOOLEANS[read_attribute(:has_alternate_student)]
    end
  end

  def has_alternate_student=(value)
    write_attribute(:has_alternate_student, EnumConstants::BOOLEANS.index(value))
  end

  def primary_gender
    if !read_attribute(:primary_gender).nil?
      EnumConstants::GENDERS[read_attribute(:primary_gender)]
    end
  end

  def primary_gender=(value)
    write_attribute(:primary_gender, EnumConstants::GENDERS.index(value))
  end

  def primary_guardian_phone_type
    if !read_attribute(:primary_guardian_phone_type).nil?
      EnumConstants::PHONE_TYPES[read_attribute(:primary_guardian_phone_type)]
    end
  end

  def primary_guardian_phone_type=(value)
    write_attribute(:primary_guardian_phone_type, EnumConstants::PHONE_TYPES.index(value))
  end

  def primary_guardian_relationship
    if !read_attribute(:primary_guardian_relationship).nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[read_attribute(:primary_guardian_relationship)]
    end
  end

  def primary_guardian_relationship=(value)
    write_attribute(:primary_guardian_relationship, EnumConstants::GUARDIAN_RELATIONSHIPS.index(value))
  end

  def primary_address_state
    if !read_attribute(:primary_address_state).nil?
      EnumConstants::STATES[read_attribute(:primary_address_state)]
    end
  end

  def primary_address_state=(value)
    write_attribute(:primary_address_state, EnumConstants::STATES.index(value))
  end

  def primary_shirt_size
    if !read_attribute(:primary_shirt_size).nil?
      EnumConstants::SHIRT_SIZES[read_attribute(:primary_shirt_size)]
    end
  end

  def primary_shirt_size=(value)
    write_attribute(:primary_shirt_size, EnumConstants::SHIRT_SIZES.index(value))
  end

  def custom_update(update_params)
    if is_active
      validator = SchoolValidator.new(update_params)
      validator.valid?
      error_response = validator.errors.to_hash
      valid_params = {}
      update_params.each do |attribute, value|
        if !error_response.key?(attribute.to_sym)
          valid_params[attribute] = value
        end
      end
      if valid_params.size > 0
        self.update_attributes(valid_params)
      end
      error_response.each do |attribute, messages|
        messages.each do |message|
          self.errors.add(attribute, message)
        end
      end
      self.errors.size == 0
    end
  end

  def attributes_pages
    {
      0 => {},
      1 => attributes_one,
      2 => attributes_two,
      3 => attributes_three,
      4 => attributes_four,
    }
  end

  def is_previewable?
    attributes_pages.each do |index, attributes_page|
      attributes_page[:current_page] = index
      validator = SchoolValidator.new(attributes_page)
      validator.valid?
      if validator.errors.size > 0
        return false
      end
    end
    true
  end

  def page_progress
    attributes_pages.each do |index, attributes_page|
      attributes_page[:current_page] = index
      validator = SchoolValidator.new(attributes_page)
      validator.valid?
      if validator.errors.size > 0
        return index
      end
    end
    attributes_pages.size - 1
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
    unless school.save
      raise 'Could not create school from submission'
    end
    contact = Contact.new(
      email: contact_email,
      first_name: contact_first_name,
      last_name: contact_last_name,
      is_primary: true,
      phone_number: contact_phone_number,
      title: contact_title,
      school: school,
    )
    unless contact.save
      raise 'Could not create contact from submission'
    end
    primary_submission = StudentSubmission.new(
      address_city: primary_address_city,
      address_one: primary_address_one,
      address_state: primary_address_state,
      address_two: primary_address_two,
      address_zip: primary_address_zip,
      birthday: primary_birthday,
      cell_phone: primary_cell_phone,
      email: primary_email,
      first_name: primary_first_name,
      gender: primary_gender,
      guardian_first_name: primary_guardian_first_name,
      guardian_email: primary_guardian_email,
      guardian_last_name: primary_guardian_last_name,
      guardian_phone_number: primary_guardian_phone_number,
      guardian_phone_type: primary_guardian_phone_type,
      guardian_relationship: primary_guardian_relationship,
      home_phone: primary_home_phone,
      is_primary: true,
      last_name: primary_last_name,
      shirt_size: primary_shirt_size,
    )
    unless primary_submission.save
      raise 'Could not create primary student from submission'
    end
    if has_alternate_student == EnumConstants::BOOLEANS[0]
      alternate_submission = StudentSubmission.new(
        address_city: alternate_address_city,
        address_one: alternate_address_one,
        address_state: alternate_address_state,
        address_two: alternate_address_two,
        address_zip: alternate_address_zip,
        birthday: alternate_birthday,
        cell_phone: alternate_cell_phone,
        email: alternate_email,
        first_name: alternate_first_name,
        gender: alternate_gender,
        guardian_first_name: alternate_guardian_first_name,
        guardian_email: alternate_guardian_email,
        guardian_last_name: alternate_guardian_last_name,
        guardian_phone_number: alternate_guardian_phone_number,
        guardian_phone_type: alternate_guardian_phone_type,
        guardian_relationship: alternate_guardian_relationship,
        home_phone: alternate_home_phone,
        is_primary: false,
        last_name: alternate_last_name,
        shirt_size: alternate_shirt_size,
      )
      unless alternate_submission.save
        raise 'Could not create alternate student from submission'
      end
      # begin
      #   SubmissionsMailer.create_student(alternate_submission).deliver_now
      # rescue
      #   raise 'Could not deliver appropriate emails'
      # end
    end
    begin
      SubmissionsMailer.submit_school(self).deliver_now
      SubmissionsMailer.create_student(primary_submission).deliver_now
    rescue
      raise 'Could not deliver appropriate emails'
    end
    self.is_active = false
    self.save
  end

  private

  def attributes_one
    {
      address_city: address_city,
      address_one: address_one,
      address_state: address_state,
      address_two: address_two,
      address_zip: address_zip,
      name: name,
      website: website,
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
      primary_address_city: primary_address_city,
      primary_address_one: primary_address_one,
      primary_address_state: primary_address_state,
      primary_address_two: primary_address_two,
      primary_address_zip: primary_address_zip,
      primary_birthday: primary_birthday,
      primary_cell_phone: primary_cell_phone,
      primary_email: primary_email,
      primary_first_name: primary_first_name,
      primary_gender: primary_gender,
      primary_guardian_first_name: primary_guardian_first_name,
      primary_guardian_email: primary_guardian_email,
      primary_guardian_last_name: primary_guardian_last_name,
      primary_guardian_phone_number: primary_guardian_phone_number,
      primary_guardian_phone_type: primary_guardian_phone_type,
      primary_guardian_relationship: primary_guardian_relationship,
      primary_home_phone: primary_home_phone,
      primary_last_name: primary_last_name,
      primary_shirt_size: primary_shirt_size,
    }
  end

  def attributes_four
    {
      alternate_address_city: alternate_address_city,
      alternate_address_one: alternate_address_one,
      alternate_address_state: alternate_address_state,
      alternate_address_two: alternate_address_two,
      alternate_address_zip: alternate_address_zip,
      alternate_birthday: alternate_birthday,
      alternate_cell_phone: alternate_cell_phone,
      alternate_email: alternate_email,
      alternate_first_name: alternate_first_name,
      alternate_gender: alternate_gender,
      alternate_guardian_first_name: alternate_guardian_first_name,
      alternate_guardian_email: alternate_guardian_email,
      alternate_guardian_last_name: alternate_guardian_last_name,
      alternate_guardian_phone_number: alternate_guardian_phone_number,
      alternate_guardian_phone_type: alternate_guardian_phone_type,
      alternate_guardian_relationship: alternate_guardian_relationship,
      alternate_home_phone: alternate_home_phone,
      alternate_last_name: alternate_last_name,
      alternate_shirt_size: alternate_shirt_size,
      has_alternate_student: has_alternate_student,
    }
  end

end
