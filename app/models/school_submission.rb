# == Schema Information
#
# Table name: school_submissions
#
#  id                    :integer          not null, primary key
#  address_city          :string
#  address_one           :string
#  address_state         :string
#  address_two           :string           default("")
#  address_zip           :string
#  contact_email         :string
#  contact_first_name    :string
#  contact_last_name     :string
#  contact_phone_number  :string
#  contact_title         :string
#  current_page          :integer          default(0), not null
#  is_draft              :boolean          default(TRUE), not null
#  name                  :string
#  student_address_city  :string
#  student_address_one   :string
#  student_address_state :string
#  student_address_two   :string           default("")
#  student_address_zip   :string
#  student_birthday      :date
#  student_cell_phone    :string
#  student_email         :string
#  student_first_name    :string
#  student_gender        :integer
#  student_home_phone    :string
#  student_last_name     :string
#  student_shirt_size    :integer
#  uuid                  :uuid
#  website               :string           default("")
#

class SchoolSubmission < ActiveRecord::Base

  before_validation :try_submit, on: :update
  before_validation :validate_page, on: [:create, :update]

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
      student_home_phone: student_home_phone,
      student_last_name: student_last_name,
      student_shirt_size: student_shirt_size,
    }
  end

  def try_submit
    if !is_draft
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
          home_phone: student_home_phone,
          last_name: student_last_name,
          shirt_size: student_shirt_size,
        )
        if contact.save && student_submission.save
          # TODO(Warren): Is there a better way to set the uuid?
          student_submission = StudentSubmission.find student_submission.id
          if SchoolMailer.create(school).deliver_now &&
             StudentMailer.create(student_submission).deliver_now
            true
          else
            false
          end
        else
          self.is_draft = true
          false
        end
      else
        self.is_draft = true
        false
      end
    end
  end

  def validate_page
    attributes_hash = {
      1 => attributes_one,
      2 => attributes_two,
      3 => attributes_three,
    }
    current_attributes = attributes_hash[current_page]
    validator = SchoolValidator.new(current_attributes, current_page)
    validator.valid?
    response = validator.errors.to_hash
    response.each do |attribute, message|
      self.errors.add(attribute, message)
    end
  end

end
