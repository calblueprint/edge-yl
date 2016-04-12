# == Schema Information
#
# Table name: student_submissions
#
#  id                         :uuid             not null, primary key
#  address_city               :string
#  address_one                :string
#  address_state              :integer          default(4)
#  address_two                :string           default("")
#  address_zip                :string
#  allergies                  :integer
#  birthday                   :date
#  cell_phone                 :string
#  current_page               :integer          default(0), not null
#  dietary_restrictions       :integer
#  email                      :string
#  emergency_consent          :integer
#  exercise_limitations       :string
#  first_name                 :string
#  gender                     :integer
#  guardian_one_email         :string
#  guardian_one_employer      :string           default("")
#  guardian_one_first_name    :string
#  guardian_one_job_title     :string           default("")
#  guardian_one_last_name     :string
#  guardian_one_phone_number  :string
#  guardian_one_phone_type    :integer
#  guardian_one_relationship  :integer
#  guardian_two_email         :string
#  guardian_two_employer      :string           default("")
#  guardian_two_first_name    :string
#  guardian_two_job_title     :string           default("")
#  guardian_two_last_name     :string
#  guardian_two_phone_number  :string
#  guardian_two_phone_type    :integer
#  guardian_two_relationship  :integer
#  health_conditions          :integer
#  home_phone                 :string
#  is_active                  :boolean          default(TRUE), not null
#  is_primary                 :boolean          not null
#  immunizations              :integer
#  last_name                  :string
#  medical_guardian_name      :string
#  medications                :string
#  other_dietary_restrictions :string
#  preferred_name             :string           default("")
#  psychologist_consent       :integer
#  shirt_size                 :integer
#  conference_id              :integer          not null
#

class StudentSubmission < ActiveRecord::Base

  validates :current_page, presence: true
  validates :is_active, inclusion: { in: [false, true] }
  validates :is_primary, inclusion: { in: [false, true] }

  def address_state
    if !read_attribute(:address_state).nil?
      EnumConstants::STATES[read_attribute(:address_state)]
    end
  end

  def address_state=(value)
    write_attribute(:address_state, EnumConstants::STATES.index(value))
  end

  def allergies
    if !read_attribute(:allergies).nil?
      EnumConstants::BOOLEANS[read_attribute(:allergies)]
    end
  end

  def allergies=(value)
    write_attribute(:allergies, EnumConstants::BOOLEANS.index(value))
  end

  def dietary_restrictions
    if !read_attribute(:dietary_restrictions).nil?
      EnumConstants::DIETARY_RESTRICTIONS[read_attribute(:dietary_restrictions)]
    end
  end

  def dietary_restrictions=(value)
    write_attribute(:dietary_restrictions, EnumConstants::DIETARY_RESTRICTIONS.index(value))
  end

  def emergency_consent
    if !read_attribute(:emergency_consent).nil?
      EnumConstants::BOOLEANS[read_attribute(:emergency_consent)]
    end
  end

  def emergency_consent=(value)
    write_attribute(:emergency_consent, EnumConstants::BOOLEANS.index(value))
  end

  def gender
    if !read_attribute(:gender).nil?
      EnumConstants::GENDERS[read_attribute(:gender)]
    end
  end

  def gender=(value)
    write_attribute(:gender, EnumConstants::GENDERS.index(value))
  end

  def guardian_one_phone_type
    if !read_attribute(:guardian_one_phone_type).nil?
      EnumConstants::PHONE_TYPES[read_attribute(:guardian_one_phone_type)]
    end
  end

  def guardian_one_phone_type=(value)
    write_attribute(:guardian_one_phone_type, EnumConstants::PHONE_TYPES.index(value))
  end

  def guardian_one_relationship
    if !read_attribute(:guardian_one_relationship).nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[read_attribute(:guardian_one_relationship)]
    end
  end

  def guardian_one_relationship=(value)
    write_attribute(:guardian_one_relationship, EnumConstants::GUARDIAN_RELATIONSHIPS.index(value))
  end

  def guardian_two_phone_type
    if !read_attribute(:guardian_two_phone_type).nil?
      EnumConstants::PHONE_TYPES[read_attribute(:guardian_two_phone_type)]
    end
  end

  def guardian_two_phone_type=(value)
    write_attribute(:guardian_two_phone_type, EnumConstants::PHONE_TYPES.index(value))
  end

  def guardian_two_relationship
    if !read_attribute(:guardian_two_relationship).nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[read_attribute(:guardian_two_relationship)]
    end
  end

  def guardian_two_relationship=(value)
    write_attribute(:guardian_two_relationship, EnumConstants::GUARDIAN_RELATIONSHIPS.index(value))
  end

  def health_conditions
    if !read_attribute(:health_conditions).nil?
      EnumConstants::BOOLEANS[read_attribute(:health_conditions)]
    end
  end

  def health_conditions=(value)
    write_attribute(:health_conditions, EnumConstants::BOOLEANS.index(value))
  end

  def immunizations
    if !read_attribute(:immunizations).nil?
      EnumConstants::BOOLEANS[read_attribute(:immunizations)]
    end
  end

  def immunizations=(value)
    write_attribute(:immunizations, EnumConstants::BOOLEANS.index(value))
  end

  def psychologist_consent
    if !read_attribute(:psychologist_consent).nil?
      EnumConstants::BOOLEANS[read_attribute(:psychologist_consent)]
    end
  end

  def psychologist_consent=(value)
    write_attribute(:psychologist_consent, EnumConstants::BOOLEANS.index(value))
  end

  def shirt_size
    if !read_attribute(:shirt_size).nil?
      EnumConstants::SHIRT_SIZES[read_attribute(:shirt_size)]
    end
  end

  def shirt_size=(value)
    write_attribute(:shirt_size, EnumConstants::SHIRT_SIZES.index(value))
  end

  def form_url
    # TODO (Warren): !!!
    "http://edge-yl-staging.herokuapp.com/forms/student/#{id}/start"
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def custom_update(update_params)
    if is_active
      validator = StudentValidator.new(update_params)
      validator.valid?
      error_response = validator.errors.to_hash
      valid_params = {}
      update_params.each do |attribute, value|
        if !error_response.key?(attribute.to_sym)
          valid_params[attribute] = value
        end
      end
      if valid_params.size > 0
        update_attributes(valid_params)
      end
      error_response.each do |attribute, messages|
        messages.each do |message|
          errors.add(attribute, message)
        end
      end
      errors.size == 0
    end
  end

  def attributes_pages
    {
      0 => {},
      1 => attributes_one,
      2 => attributes_two,
      3 => attributes_three,
    }
  end

  def is_previewable?
    attributes_pages.each do |index, attributes_page|
      attributes_page[:current_page] = index
      validator = StudentValidator.new(attributes_page)
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
      validator = StudentValidator.new(attributes_page)
      validator.valid?
      if validator.errors.size > 0
        return index
      end
    end
    attributes_pages.size - 1
  end

  def submit_submission
    student = Student.new(
      address_city: address_city,
      address_one: address_one,
      address_state: address_state,
      address_two: address_two,
      address_zip: address_zip,
      allergies: allergies,
      birthday: birthday,
      cell_phone: cell_phone,
      conference_id: conference_id,
      dietary_restrictions: dietary_restrictions,
      exercise_limitations: exercise_limitations,
      email: email,
      emergency_consent: emergency_consent,
      first_name: first_name,
      gender: gender,
      health_conditions: health_conditions,
      guardian_one_email: guardian_one_email,
      guardian_one_employer: guardian_one_employer,
      guardian_one_first_name: guardian_one_first_name,
      guardian_one_job_title: guardian_one_job_title,
      guardian_one_last_name: guardian_one_last_name,
      guardian_one_phone_type: guardian_one_phone_type,
      guardian_one_phone_number: guardian_one_phone_number,
      guardian_one_relationship: guardian_one_relationship,
      guardian_two_email: guardian_two_email,
      guardian_two_employer: guardian_two_employer,
      guardian_two_first_name: guardian_two_first_name,
      guardian_two_job_title: guardian_two_job_title,
      guardian_two_last_name: guardian_two_last_name,
      guardian_two_phone_type: guardian_two_phone_type,
      guardian_two_phone_number: guardian_two_phone_number,
      guardian_two_relationship: guardian_two_relationship,
      home_phone: home_phone,
      immunizations: immunizations,
      is_primary: is_primary,
      last_name: last_name,
      medical_guardian_name: medical_guardian_name,
      medications: medications,
      other_dietary_restrictions: other_dietary_restrictions,
      preferred_name: preferred_name,
      psychologist_consent: psychologist_consent,
      shirt_size: shirt_size,
    )
    unless student.save
      raise 'Could not create student from submission'
    end
    begin
      SubmissionsMailer.submit_student(self).deliver_now
    rescue
      raise 'Could not deliver appropriate emails'
    end
    self.is_active = false
    save
  end

  private

  def attributes_one
    {
      address_city: address_city,
      address_one: address_one,
      address_state: address_state,
      address_two: address_two,
      address_zip: address_zip,
      birthday: birthday,
      cell_phone: cell_phone,
      email: email,
      first_name: first_name,
      gender: gender,
      home_phone: home_phone,
      last_name: last_name,
      shirt_size: shirt_size,
    }
  end

  def attributes_two
    {
      guardian_one_email: guardian_one_email,
      guardian_one_employer: guardian_one_employer,
      guardian_one_first_name: guardian_one_first_name,
      guardian_one_job_title: guardian_one_job_title,
      guardian_one_last_name: guardian_one_last_name,
      guardian_one_phone_number: guardian_one_phone_number,
      guardian_one_phone_type: guardian_one_phone_type,
      guardian_one_relationship: guardian_one_relationship,
      guardian_two_email: guardian_two_email,
      guardian_two_employer: guardian_two_employer,
      guardian_two_first_name: guardian_two_first_name,
      guardian_two_job_title: guardian_two_job_title,
      guardian_two_last_name: guardian_two_last_name,
      guardian_two_phone_number: guardian_two_phone_number,
      guardian_two_phone_type: guardian_two_phone_type,
      guardian_two_relationship: guardian_two_relationship,
    }
  end

  def attributes_three
    {
      allergies: allergies,
      dietary_restrictions: dietary_restrictions,
      emergency_consent: emergency_consent,
      exercise_limitations: exercise_limitations,
      health_conditions: health_conditions,
      immunizations: immunizations,
      medical_guardian_name: medical_guardian_name,
      medications: medications,
      other_dietary_restrictions: other_dietary_restrictions,
      psychologist_consent: psychologist_consent,
    }
  end

end
