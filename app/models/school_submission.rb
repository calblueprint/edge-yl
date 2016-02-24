# == Schema Information
#
# Table name: school_submissions
#
#  id            :integer          not null, primary key
#  address_city  :string
#  address_one   :string
#  address_state :string
#  address_two   :string
#  address_zip   :string
#  current_page  :integer          default(0), not null
#  is_draft      :boolean          default(TRUE), not null
#  name          :string
#  website       :string
#

class SchoolSubmission < ActiveRecord::Base

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

  def validate_page
    if current_page == 1
      validator = SchoolValidator.new(attributes_one, current_page)
      validator.valid?
      response = validator.errors.to_hash
      response.each do |attribute, message|
        self.errors.add(attribute, message)
      end
    end
  end

end
