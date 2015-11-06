class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|

      t.date :birthday, null: false
      t.string :cell_phone, null: false
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :home_address, null: false
      t.string :home_phone, null: false
      t.string :last_name, null: false

      t.references :school, index: true

      t.timestamps null: false
    end
  end
end
