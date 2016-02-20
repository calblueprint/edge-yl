# == Schema Information
#
# Table name: submissions
#
#  id                    :integer          not null, primary key
#  address_city          :string
#  address_one           :string
#  address_state         :string
#  address_two           :string
#  address_zip           :string
#  birthday              :date
#  cell_phone            :string
#  current_page          :string
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

class Submission < ActiveRecord::Base

	before_validation :try_submit, on: :update

	private

	def try_submit
		if !is_draft
			puts 'try submit'
		end
	end

end
