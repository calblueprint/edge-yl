class CreateQuestions < ActiveRecord::Migration

  def change
    create_table :questions do |t|
      t.string  :description, default: '', null: false
      t.integer :format, default: 1, null: false
      t.boolean :is_required, default: true, null: false
      t.string  :key, null: false
      t.string  :options, array: true, default: [], null: false
      t.string  :placeholder, default: '', null: false
      t.integer :style, default: 1, null: false
      t.string  :title, null: false

      t.references :page, index: true

      t.timestamps null: false
    end
  end

end
