class CreateForms < ActiveRecord::Migration

  def change
    create_table :forms do |t|
      t.integer :target, null: false
      t.string  :title, null: false

      t.timestamps null: false
    end
  end

end
