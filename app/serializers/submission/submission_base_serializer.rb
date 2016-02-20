class SubmissionBaseSerializer < BaseSerializer

  attributes :id, :address_city, :address_one, :address_state, :address_two,
  					:address_state, :address_two, :address_zip, :birthday, :cell_phone, :current_page,
  					:email, :first_name, :gender, :guardian_email, :guardian_employer, :guardian_first_name,
  					:guardian_job_title, :guardian_last_name, :guardian_phone_number, :guardian_phone_type,
  					:guardian_relationship, :home_phone, :last_name, :preferred_name, :registration_status,
  					:shirt_size, :uuid

end
