# == Schema Information
#
# Table name: student_submissions
#
#  id                    :integer          not null, primary key
#  address_city          :string
#  address_one           :string
#  address_state         :string
#  address_two           :string
#  address_zip           :string
#  birthday              :date
#  cell_phone            :string
#  current_page          :integer          default(0), not null
#  email                 :string
#  first_name            :string
#  gender                :integer
#  guardian_email        :string
#  guardian_employer     :string
#  guardian_first_name   :string
#  guardian_job_title    :string
#  guardian_last_name    :string
#  guardian_phone_number :string
#  guardian_phone_type   :integer
#  guardian_relationship :integer
#  home_phone            :string
#  is_draft              :boolean          default(TRUE), not null
#  last_name             :string
#  preferred_name        :string
#  registration_status   :integer
#  shirt_size            :integer
#  uuid                  :uuid
#

class StudentSubmission < ActiveRecord::Base

  before_validation :try_submit, on: :update
  before_validation :validate_page, on: [:create, :update]

  private

  def attributes_one
    {
      first_name: first_name,
      last_name: last_name,
    }
  end

  def try_submit
    if !is_draft
      student = Student.new(
        address_city: address_city,
        address_one: address_one,
        address_state: address_state,
        address_two: address_two,
        address_zip: address_zip,
        birthday: Date.new,
        cell_phone: cell_phone,
        email: email,
        first_name: first_name,
        gender: 0,
        guardian_email: guardian_email,
        guardian_employer: guardian_employer,
        guardian_first_name: guardian_first_name,
        guardian_job_title: guardian_job_title,
        guardian_last_name: guardian_last_name,
        guardian_phone_type: 0,
        guardian_phone_number: guardian_phone_number,
        guardian_relationship: 3,
        home_phone: home_phone,
        last_name: last_name,
        preferred_name: preferred_name,
        shirt_size: 1,
      )
      student.save!
    end
  end

  def validate_page
    if current_page == 1
      validator = StudentValidator.new(attributes_one, current_page)
      validator.valid?
      response = validator.errors.to_hash
      response.each do |attribute, message|
        self.errors.add(attribute, message)
      end
    end
  end

end
