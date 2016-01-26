class CreateRooms < ActiveRecord::Migration

  def change
    create_table :rooms do |t|
      t.integer :capacity, null: false
      t.integer :gender, null: false
      t.integer :number, null: false

      t.references :conference, index: true

      t.timestamps null: false
    end
  end

end
