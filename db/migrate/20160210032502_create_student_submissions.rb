class CreateStudentSubmissions < ActiveRecord::Migration

  def change
    create_table :student_submissions, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string  :address_city
      t.string  :address_one
      t.integer :address_state, default: 4
      t.string  :address_two, default: ''
      t.string  :address_zip
      t.integer :allergies
      t.date    :birthday
      t.string  :cell_phone
      t.integer :current_page, default: 0, null: false
      t.integer :dietary_restrictions
      t.string  :email
      t.integer :emergency_consent
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
      t.integer :health_conditions
      t.string  :home_phone
      t.boolean :is_active, default: true, null: false
      t.boolean :is_primary, null: false
      t.integer :immunizations
      t.integer :insurance
      t.string  :insurance_address
      t.string  :insurance_address_city
      t.integer :insurance_address_state
      t.string  :insurance_id
      t.string  :insurance_other, default: ''
      t.string  :insurance_phone_number
      t.string  :insurance_provider
      t.string  :last_name
      t.string  :medical_guardian_name
      t.string  :medications
      t.string  :other_dietary_restrictions
      t.string  :preferred_name, default: ''
      t.integer :psychologist_consent
      t.integer :shirt_size

      t.references :conference, index: true, null: false
    end
  end

end

