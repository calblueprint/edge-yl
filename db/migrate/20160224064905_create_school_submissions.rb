class CreateSchoolSubmissions < ActiveRecord::Migration

  def change
    create_table :school_submissions, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string  :address_city
      t.string  :address_one
      t.integer :address_state
      t.string  :address_two, default: ''
      t.string  :address_zip
      t.string  :alternate_student_address_city
      t.string  :alternate_student_address_one
      t.string  :alternate_student_address_state
      t.string  :alternate_student_address_two, default: ''
      t.string  :alternate_student_address_zip
      t.date    :alternate_student_birthday
      t.string  :alternate_student_cell_phone
      t.string  :alternate_student_email
      t.string  :alternate_student_first_name
      t.integer :alternate_student_gender
      t.string  :alternate_student_guardian_first_name
      t.string  :alternate_student_guardian_email
      t.string  :alternate_student_guardian_last_name
      t.string  :alternate_student_guardian_phone_number
      t.integer :alternate_student_guardian_phone_type
      t.integer :alternate_student_guardian_relationship
      t.string  :alternate_student_home_phone
      t.string  :alternate_student_last_name
      t.integer :alternate_student_shirt_size
      t.string  :contact_email
      t.string  :contact_first_name
      t.string  :contact_last_name
      t.string  :contact_phone_number
      t.string  :contact_title
      t.integer :current_page, default: 0, null: false
      t.integer :has_alternate_student
      t.boolean :is_draft, default: true, null: false
      t.string  :name
      t.string  :student_address_city
      t.string  :student_address_one
      t.string  :student_address_state
      t.string  :student_address_two, default: ''
      t.string  :student_address_zip
      t.date    :student_birthday
      t.string  :student_cell_phone
      t.string  :student_email
      t.string  :student_first_name
      t.integer :student_gender
      t.string  :student_guardian_first_name
      t.string  :student_guardian_email
      t.string  :student_guardian_last_name
      t.string  :student_guardian_phone_number
      t.integer :student_guardian_phone_type
      t.integer :student_guardian_relationship
      t.string  :student_home_phone
      t.string  :student_last_name
      t.integer :student_shirt_size
      t.string  :website, default: ''
    end
  end

end
