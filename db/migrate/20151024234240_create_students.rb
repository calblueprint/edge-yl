class CreateStudents < ActiveRecord::Migration

  def change
    create_table :students do |t|
      t.string  :address_city, null: false
      t.string  :address_one, null: false
      t.string  :address_state, null: false
      t.string  :address_two, default: '', null: false
      t.string  :address_zip, null: false
      t.date    :birthday, null: false
      t.string  :cell_phone, null: false
      t.string  :email, null: false
      t.string  :first_name, null: false
      t.integer :gender, null: false
      t.string  :guardian_email, null: false
      t.string  :guardian_employer, default: '', null: false
      t.string  :guardian_first_name, null: false
      t.string  :guardian_job_title, default: '', null: false
      t.string  :guardian_last_name, null: false
      t.string  :guardian_phone_number, null: false
      t.integer :guardian_phone_type, null: false
      t.integer :guardian_relationship, null: false
      t.string  :home_phone, null: false
      t.boolean :is_flagged, null: false
      t.boolean :is_primary, null: false
      t.string  :last_name, null: false
      t.string  :preferred_name, default: '', null: false
      t.integer :registration_status, null: false
      t.integer :shirt_size, null: false

      t.references :group, index: true
      t.references :school, index: true

      t.timestamps null: false
    end
  end

end
