# == Schema Information
#
# Table name: student_submissions
#
#  id                             :uuid             not null, primary key
#  address_city                   :string
#  address_one                    :string
#  address_state                  :integer          default(4)
#  address_two                    :string           default("")
#  address_zip                    :string
#  allergies                      :integer
#  birthday                       :date
#  carpool                        :integer
#  cell_phone                     :string
#  ceremony_attendance            :integer
#  ceremony_attendance_number     :integer
#  current_page                   :integer          default(0), not null
#  dietary_restrictions           :string
#  email                          :string
#  emergency_consent              :integer
#  emergency_consent_name         :string
#  exercise_limitations           :string
#  first_name                     :string
#  gender                         :integer
#  guardian_one_email             :string
#  guardian_one_employer          :string           default("")
#  guardian_one_first_name        :string
#  guardian_one_job_title         :string           default("")
#  guardian_one_last_name         :string
#  guardian_one_phone_number      :string
#  guardian_one_phone_type        :integer
#  guardian_one_relationship      :integer
#  guardian_two_email             :string
#  guardian_two_employer          :string           default("")
#  guardian_two_first_name        :string
#  guardian_two_job_title         :string           default("")
#  guardian_two_last_name         :string
#  guardian_two_phone_number      :string
#  guardian_two_phone_type        :integer
#  guardian_two_relationship      :integer
#  health_conditions              :string
#  health_conditions_description  :string
#  home_phone                     :string
#  is_active                      :boolean          default(TRUE), not null
#  is_primary                     :boolean          not null
#  immunizations                  :integer
#  insurance                      :integer
#  insurance_address              :string
#  insurance_address_city         :string
#  insurance_address_state        :integer
#  insurance_address_zip          :integer
#  insurance_id                   :string
#  insurance_other                :string           default("")
#  insurance_phone_number         :string
#  insurance_provider             :string
#  last_name                      :string
#  media_information              :string
#  media_newspaper                :string
#  media_participation            :integer
#  medications                    :string
#  other_dietary_restrictions     :string           default("")
#  participation_guardian_consent :integer
#  participation_guardian_name    :string
#  participation_student_consent  :integer
#  participation_student_name     :string
#  preferred_name                 :string           default("")
#  psychologist_consent           :integer
#  psychologist_consent_name      :string
#  risk_guardian_consent          :integer
#  risk_guardian_date             :date
#  risk_guardian_email            :string
#  risk_guardian_name             :string
#  risk_guardian_relationship     :integer
#  risk_student_consent           :integer
#  risk_student_date              :date
#  risk_student_email             :string
#  risk_student_name              :string
#  shirt_size                     :integer
#  transportation                 :integer
#  transportation_arrival_date    :date
#  transportation_arrival_time    :time
#  transportation_carrier         :string
#  transportation_consent         :integer
#  transportation_consent_name    :string
#  transportation_departure_date  :date
#  transportation_departure_time  :time
#  transportation_name            :string
#  transportation_number          :string
#  conference_id                  :integer          not null
#

class StudentSubmission < ActiveRecord::Base

  validates :current_page, presence: true
  validates :is_active, inclusion: { in: [false, true] }
  validates :is_primary, inclusion: { in: [false, true] }

  def address_state
    unless self[:address_state].nil?
      EnumConstants::STATES[self[:address_state]]
    end
  end

  def address_state=(value)
    self[:address_state] = EnumConstants::STATES.index(value)
  end

  def allergies
    unless self[:allergies].nil?
      EnumConstants::BOOLEANS[self[:allergies]]
    end
  end

  def allergies=(value)
    self[:allergies] = EnumConstants::BOOLEANS.index(value)
  end

  def carpool
    unless self[:carpool].nil?
      EnumConstants::CARPOOL_OPTIONS[self[:carpool]]
    end
  end

  def carpool=(value)
    self[:carpool] = EnumConstants::CARPOOL_OPTIONS.index(value)
  end

  def ceremony_attendance
    unless self[:ceremony_attendance].nil?
      EnumConstants::CEREMONY_OPTIONS[self[:ceremony_attendance]]
    end
  end

  def ceremony_attendance=(value)
    self[:ceremony_attendance] = EnumConstants::CEREMONY_OPTIONS.index(value)
  end

  def emergency_consent
    unless self[:emergency_consent].nil?
      EnumConstants::BOOLEANS[self[:emergency_consent]]
    end
  end

  def emergency_consent=(value)
    self[:emergency_consent] = EnumConstants::BOOLEANS.index(value)
  end

  def gender
    unless self[:gender].nil?
      EnumConstants::GENDERS[self[:gender]]
    end
  end

  def gender=(value)
    self[:gender] = EnumConstants::GENDERS.index(value)
  end

  def guardian_one_phone_type
    unless self[:guardian_one_phone_type].nil?
      EnumConstants::PHONE_TYPES[self[:guardian_one_phone_type]]
    end
  end

  def guardian_one_phone_type=(value)
    self[:guardian_one_phone_type] = EnumConstants::PHONE_TYPES.index(value)
  end

  def guardian_one_relationship
    unless self[:guardian_one_relationship].nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[self[:guardian_one_relationship]]
    end
  end

  def guardian_one_relationship=(value)
    self[:guardian_one_relationship] = EnumConstants::GUARDIAN_RELATIONSHIPS.index(value)
  end

  def guardian_two_phone_type
    unless self[:guardian_two_phone_type].nil?
      EnumConstants::PHONE_TYPES[self[:guardian_two_phone_type]]
    end
  end

  def guardian_two_phone_type=(value)
    self[:guardian_two_phone_type] = EnumConstants::PHONE_TYPES.index(value)
  end

  def guardian_two_relationship
    unless self[:guardian_two_relationship].nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[self[:guardian_two_relationship]]
    end
  end

  def guardian_two_relationship=(value)
    self[:guardian_two_relationship] = EnumConstants::GUARDIAN_RELATIONSHIPS.index(value)
  end

  def immunizations
    unless self[:immunizations].nil?
      EnumConstants::BOOLEANS[self[:immunizations]]
    end
  end

  def immunizations=(value)
    self[:immunizations] = EnumConstants::BOOLEANS.index(value)
  end

  def insurance
    unless self[:insurance].nil?
      EnumConstants::BOOLEANS[self[:insurance]]
    end
  end

  def insurance=(value)
    self[:insurance] = EnumConstants::BOOLEANS.index(value)
  end

  def insurance_address_state
    unless self[:insurance_address_state].nil?
      EnumConstants::STATES[self[:insurance_address_state]]
    end
  end

  def insurance_address_state=(value)
    self[:insurance_address_state] = EnumConstants::STATES.index(value)
  end

  def participation_guardian_consent
    unless self[:participation_guardian_consent].nil?
      EnumConstants::AGREEMENTS[self[:participation_guardian_consent]]
    end
  end

  def participation_guardian_consent=(value)
    self[:participation_guardian_consent] = EnumConstants::AGREEMENTS.index(value)
  end

  def participation_student_consent
    unless self[:participation_student_consent].nil?
      EnumConstants::AGREEMENTS[self[:participation_student_consent]]
    end
  end

  def participation_student_consent=(value)
    self[:participation_student_consent] = EnumConstants::AGREEMENTS.index(value)
  end

  def psychologist_consent
    unless self[:psychologist_consent].nil?
      EnumConstants::BOOLEANS[self[:psychologist_consent]]
    end
  end

  def psychologist_consent=(value)
    self[:psychologist_consent] = EnumConstants::BOOLEANS.index(value)
  end

  def risk_student_consent
    unless self[:risk_student_consent].nil?
      EnumConstants::AGREEMENTS[self[:risk_student_consent]]
    end
  end

  def risk_student_consent=(value)
    self[:risk_student_consent] = EnumConstants::AGREEMENTS.index(value)
  end

  def risk_guardian_relationship
    unless self[:risk_guardian_relationship].nil?
      EnumConstants::GUARDIAN_RELATIONSHIPS[self[:risk_guardian_relationship]]
    end
  end

  def risk_guardian_relationship=(value)
    self[:risk_guardian_relationship] = EnumConstants::GUARDIAN_RELATIONSHIPS.index(value)
  end

  def risk_guardian_consent
    unless self[:risk_guardian_consent].nil?
      EnumConstants::AGREEMENTS[self[:risk_guardian_consent]]
    end
  end

  def risk_guardian_consent=(value)
    self[:risk_guardian_consent] = EnumConstants::AGREEMENTS.index(value)
  end

  def shirt_size
    unless self[:shirt_size].nil?
      EnumConstants::SHIRT_SIZES[self[:shirt_size]]
    end
  end

  def shirt_size=(value)
    self[:shirt_size] = EnumConstants::SHIRT_SIZES.index(value)
  end

  def transportation
    unless self[:transportation].nil?
      EnumConstants::TRANSPORTATION_OPTIONS[self[:transportation]]
    end
  end

  def transportation=(value)
    self[:transportation] = EnumConstants::TRANSPORTATION_OPTIONS.index(value)
  end

  def transportation_consent
    unless self[:transportation_consent].nil?
      EnumConstants::AGREEMENTS[self[:transportation_consent]]
    end
  end

  def transportation_consent=(value)
    self[:transportation_consent] = EnumConstants::AGREEMENTS.index(value)
  end

  def form_url
    "#{ENV['application_domain']}/forms/student/#{id}/start"
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def custom_update(update_params)
    if is_active
      checkbox_keys = [
        :health_conditions,
        :dietary_restrictions,
      ]
      checkbox_keys.each do |checkbox_key|
        if update_params[checkbox_key]
          update_params[checkbox_key].sort!
          update_params[checkbox_key] = update_params[checkbox_key].join(',')
        end
      end
      time_keys = [
        :transportation_arrival_time,
        :transportation_departure_time,
      ]
      time_keys.each do |time_key|
        if update_params[time_key]
          update_params[time_key] = Time.zone.parse(update_params[time_key])
          puts update_params[time_key]
        end
      end
      validator = StudentValidator.new(update_params)
      validator.valid?
      error_response = validator.errors.to_hash
      valid_params = {}
      update_params.each do |attribute, value|
        unless error_response.key?(attribute.to_sym)
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
      4 => attributes_four,
      5 => attributes_five,
      6 => attributes_six,
      7 => attributes_seven,
      8 => attributes_eight,
      9 => attributes_nine,
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
      allergies_other: allergies_other,
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
      health_conditions_description: health_conditions_description,
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
      is_flagged: false,
      is_primary: is_primary,
      last_name: last_name,
      medications: medications,
      other_dietary_restrictions: other_dietary_restrictions,
      preferred_name: preferred_name,
      psychologist_consent: psychologist_consent,
      psychologist_consent_name: psychologist_consent_name,
      shirt_size: shirt_size,
    )
    unless student.save!
      fail 'Could not create student from submission'
    end
    begin
      SubmissionsMailer.submit_student(self).deliver_now
    rescue
      raise 'Could not deliver appropriate emails'
    end
    self.is_active = false
    save
  end

  def transportation_arrival_time
    unless self[:transportation_arrival_time].nil?
      self[:transportation_arrival_time].strftime('%H:%M:%S')
    end
  end

  def transportation_departure_time
    unless self[:transportation_departure_time].nil?
      self[:transportation_departure_time].strftime('%H:%M:%S')
    end
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
      allergies_other: allergies_other,
      dietary_restrictions: dietary_restrictions,
      emergency_consent: emergency_consent,
      emergency_consent_name: emergency_consent_name,
      exercise_limitations: exercise_limitations,
      health_conditions: health_conditions,
      health_conditions_description: health_conditions_description,
      immunizations: immunizations,
      medications: medications,
      other_dietary_restrictions: other_dietary_restrictions,
      psychologist_consent: psychologist_consent,
      psychologist_consent_name: psychologist_consent_name,
    }
  end

  def attributes_four
    {
      insurance: insurance,
      insurance_address: insurance_address,
      insurance_address_city: insurance_address_city,
      insurance_address_state: insurance_address_state,
      insurance_address_zip: insurance_address_zip,
      insurance_id: insurance_id,
      insurance_other: insurance_other,
      insurance_phone_number: insurance_phone_number,
      insurance_provider: insurance_provider,
    }
  end

  def attributes_five
    {
      carpool: carpool,
      transportation: transportation,
      transportation_arrival_date: transportation_arrival_date,
      transportation_arrival_time: transportation_arrival_time,
      transportation_carrier: transportation_carrier,
      transportation_consent: transportation_consent,
      transportation_consent_name: transportation_consent_name,
      transportation_departure_date: transportation_departure_date,
      transportation_departure_time: transportation_departure_time,
      transportation_name: transportation_name,
      transportation_number: transportation_number,
    }
  end

  def attributes_six
    {
      ceremony_attendance: ceremony_attendance,
      ceremony_attendance_number: ceremony_attendance_number,
    }
  end

  def attributes_seven
    {
      risk_guardian_consent: risk_guardian_consent,
      risk_guardian_date: risk_guardian_date,
      risk_guardian_email: risk_guardian_email,
      risk_guardian_name: risk_guardian_name,
      risk_guardian_relationship: risk_guardian_relationship,
      risk_student_consent: risk_student_consent,
      risk_student_date: risk_student_date,
      risk_student_email: risk_student_email,
      risk_student_name: risk_student_name,
    }
  end

  def attributes_eight
    {
      participation_guardian_consent: participation_guardian_consent,
      participation_guardian_name: participation_guardian_name,
      participation_student_consent: participation_student_consent,
      participation_student_name: participation_student_name,
    }
  end

end
