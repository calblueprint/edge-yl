class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|

      t.integer :target
      t.integer :type

      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
