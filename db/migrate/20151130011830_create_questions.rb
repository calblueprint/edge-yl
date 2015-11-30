class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|

      t.string :key, null: false
      t.string :placeholder, null: false
      t.string :title, null: false
      t.integer :type, null: false

      t.references :section, index: true

      t.timestamps null: false
    end
  end
end
