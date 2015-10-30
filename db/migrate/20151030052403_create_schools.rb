class CreateSchools < ActiveRecord::Migration
  def change
    create_table :schools do |t|

      t.string :address, null: false
      t.string :counselor_email, null: false
      t.string :counselor_name, null: false
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
