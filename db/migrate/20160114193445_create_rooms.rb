class CreateRooms < ActiveRecord::Migration

  def change
    create_table :rooms do |t|
      t.integer :number, null: false

      t.references :conference, index: true

      t.timestamps null: false
    end
  end

end
