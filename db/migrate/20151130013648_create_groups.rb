class CreateGroups < ActiveRecord::Migration

  def change
    create_table :groups do |t|
      t.string :name, null: false

      t.references :primary_leader, index: true
      t.references :secondary_leader, index: true
      t.references :conference, index: true

      t.timestamps null: false
    end
  end

end
