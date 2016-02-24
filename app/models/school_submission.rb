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
#  name          :string
#  website       :string
#

class SchoolSubmission < ActiveRecord::Base

  before_validation :validate_page, on: [:create, :update]

  private

  def validate_page
    if current_page == 1

    end
  end

end
