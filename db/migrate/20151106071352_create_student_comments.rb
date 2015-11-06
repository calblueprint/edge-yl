class CreateStudentComments < ActiveRecord::Migration
  def change
    create_table :student_comments do |t|

      t.text :content, null: false

      t.references :student, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
