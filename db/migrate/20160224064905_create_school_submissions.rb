class CreateSchoolSubmissions < ActiveRecord::Migration

  def change
    create_table :school_submissions, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string  :address_city
      t.string  :address_one
      t.integer :address_state, default: 4
      t.string  :address_two, default: ''
      t.string  :address_zip
      t.string  :alternate_address_city
      t.string  :alternate_address_one
      t.integer :alternate_address_state, default: 4
      t.string  :alternate_address_two, default: ''
      t.string  :alternate_address_zip
      t.date    :alternate_birthday
      t.string  :alternate_cell_phone
      t.string  :alternate_email
      t.string  :alternate_first_name
      t.integer :alternate_gender
      t.string  :alternate_guardian_first_name
      t.string  :alternate_guardian_email
      t.string  :alternate_guardian_last_name
      t.string  :alternate_guardian_phone_number
      t.integer :alternate_guardian_phone_type
      t.integer :alternate_guardian_relationship
      t.string  :alternate_home_phone
      t.string  :alternate_last_name
      t.integer :alternate_shirt_size
      t.string  :contact_email
      t.string  :contact_first_name
      t.string  :contact_last_name
      t.string  :contact_phone_number
      t.string  :contact_title
      t.integer :current_page, default: 0, null: false
      t.integer :has_alternate_student
      t.boolean :is_active, default: true, null: false
      t.string  :name
      t.string  :primary_address_city
      t.string  :primary_address_one
      t.integer :primary_address_state, default: 4
      t.string  :primary_address_two, default: ''
      t.string  :primary_address_zip
      t.date    :primary_birthday
      t.string  :primary_cell_phone
      t.string  :primary_email
      t.string  :primary_first_name
      t.integer :primary_gender
      t.string  :primary_guardian_first_name
      t.string  :primary_guardian_email
      t.string  :primary_guardian_last_name
      t.string  :primary_guardian_phone_number
      t.integer :primary_guardian_phone_type
      t.integer :primary_guardian_relationship
      t.string  :primary_home_phone
      t.string  :primary_last_name
      t.integer :primary_shirt_size
      t.string  :website, default: ''
    end
  end

end
