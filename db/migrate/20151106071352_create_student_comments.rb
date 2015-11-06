class CreateStudentComments < ActiveRecord::Migration
  def change
    create_table :student_comments do |t|

      t.text :content, null: false

      t.belongs_to :student, index: true
      t.belongs_to :user, index: true

      t.timestamps null: false
    end
  end
end
