class CreateStudentConferences < ActiveRecord::Migration
  def change
    create_table :student_conferences do |t|

      t.integer :status, null: false

      t.references :conference, index: true
      t.references :student, index: true

      t.timestamps null: false
    end
  end
end
