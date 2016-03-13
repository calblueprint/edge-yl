class CreatePartialSchools < ActiveRecord::Migration

  def change
    create_table :partial_schools do |t|
      t.string :name, null: false
      t.string :contact_email, null: false
      t.string :contact_first_name, null: false
      t.string :contact_last_name, null: false
      t.string :website, default: '', null: false

      t.timestamps null: false
    end
  end

end
