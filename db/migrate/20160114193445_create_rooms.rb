class CreateRooms < ActiveRecord::Migration

  def change
    create_table :rooms do |t|
      t.string :building, null: false
      t.integer :capacity, null: false
      t.integer :gender, null: false
      t.string :number, null: false
      t.integer :style, null: false

      t.references :conference, index: true, null: false

      t.timestamps null: false
    end
  end

end
