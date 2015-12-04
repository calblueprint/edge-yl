class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|

      t.string :name, null: false
      t.string :primary_leader
      t.string :secondary_leader

      t.references :conference, index: true, null: false

      t.timestamps null: false
    end
  end
end
