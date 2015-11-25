class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|

      t.integer :category
      t.integer :target

      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
