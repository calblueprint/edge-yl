class CreateSchools < ActiveRecord::Migration

  def change
    create_table :schools do |t|
      t.string :address_city, null: false
      t.string :address_one, null: false
      t.string :address_state, null: false
      t.string :address_state, null: false
      t.string :address_two, null: false
      t.string :address_zip, null: false
      t.string :contact_email, null: false
      t.string :contact_first_name, null: false
      t.string :contact_last_name, null: false
      t.string :contact_phone_number, null: false
      t.string :contact_title, null: false
      t.string :name, null: false
      t.string :website, null: false

      t.timestamps null: false
    end
  end

end
