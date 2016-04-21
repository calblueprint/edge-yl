class CreateStudentSubmissions < ActiveRecord::Migration

  def change
    create_table :student_submissions, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string  :address_city
      t.string  :address_one
      t.integer :address_state, default: 4
      t.string  :address_two, default: ''
      t.string  :address_zip
      t.integer :allergies
      t.string  :allergies_other
      t.date    :birthday
      t.integer :carpool
      t.string  :cell_phone
      t.integer :ceremony_attendance
      t.integer :ceremony_attendance_number
      t.integer :current_page, default: 0, null: false
      t.string  :dietary_restrictions
      t.string  :email
      t.integer :emergency_consent
      t.string  :emergency_consent_name
      t.string  :exercise_limitations
      t.string  :first_name
      t.integer :gender
      t.string  :guardian_one_email
      t.string  :guardian_one_employer, default: ''
      t.string  :guardian_one_first_name
      t.string  :guardian_one_job_title, default: ''
      t.string  :guardian_one_last_name
      t.string  :guardian_one_phone_number
      t.integer :guardian_one_phone_type
      t.integer :guardian_one_relationship
      t.string  :guardian_two_email
      t.string  :guardian_two_employer, default: ''
      t.string  :guardian_two_first_name
      t.string  :guardian_two_job_title, default: ''
      t.string  :guardian_two_last_name
      t.string  :guardian_two_phone_number
      t.integer :guardian_two_phone_type
      t.integer :guardian_two_relationship
      t.string  :health_conditions
      t.string  :health_conditions_description
      t.string  :home_phone
      t.boolean :is_active, default: true, null: false
      t.boolean :is_primary, null: false
      t.integer :immunizations
      t.integer :insurance
      t.string  :insurance_address
      t.string  :insurance_address_city
      t.integer :insurance_address_state
      t.integer :insurance_address_zip
      t.string  :insurance_id
      t.string  :insurance_other, default: ''
      t.string  :insurance_phone_number
      t.string  :insurance_provider
      t.string  :last_name
      t.string  :media_information
      t.string  :media_newspaper
      t.integer :media_participation
      t.string  :medications
      t.string  :other_dietary_restrictions, default: ''
      t.integer :participation_guardian_consent
      t.string  :participation_guardian_name
      t.integer :participation_student_consent
      t.string  :participation_student_name
      t.string  :preferred_name, default: ''
      t.integer :psychologist_consent
      t.string  :psychologist_consent_name
      t.integer :risk_guardian_consent
      t.date    :risk_guardian_date
      t.string  :risk_guardian_email
      t.string  :risk_guardian_name
      t.integer :risk_guardian_relationship
      t.integer :risk_student_consent
      t.date    :risk_student_date
      t.string  :risk_student_email
      t.string  :risk_student_name
      t.integer :shirt_size
      t.integer :transportation
      t.date    :transportation_arrival_date
      t.time    :transportation_arrival_time
      t.string  :transportation_carrier
      t.integer :transportation_consent
      t.string  :transportation_consent_name
      t.date    :transportation_departure_date
      t.time    :transportation_departure_time
      t.string  :transportation_name
      t.string  :transportation_number
      t.references :conference, index: true, null: false
    end
  end

end
