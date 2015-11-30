class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|

      t.date :birthday, null: false
      t.string :cell_phone, null: false
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :guardian_one_name, null: false
      t.string :guardian_one_phone, null: false
      t.string :guardian_one_email, null: false
      t.string :guardian_two_name, null: false
      t.string :guardian_two_phone, null: false
      t.string :guardian_two_email, null: false
      t.string :home_address, null: false
      t.string :home_phone, null: false
      t.string :last_name, null: false

      t.references :school, index: true
      t.references :conference, index: true

      t.timestamps null: false
    end
  end
end
