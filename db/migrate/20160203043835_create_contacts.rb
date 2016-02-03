class CreateContacts < ActiveRecord::Migration

  def change
    create_table :contacts do |t|
      t.string  :email, null: false
      t.string  :first_name, null: false
      t.boolean :is_primary, default: false, null: false
      t.string  :last_name, null: false
      t.string  :phone_number, null: false
      t.string  :title, null: false

      t.references :school, index: true

      t.timestamps null: false
    end
  end

end
