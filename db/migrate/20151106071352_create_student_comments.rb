class CreateStudentComments < ActiveRecord::Migration
  def change
    create_table :student_comments do |t|
      t.belongs_to :student, index: true
      t.belongs_to :user, index: true

      t.text :content
      t.timestamps null: false
    end
  end
end
