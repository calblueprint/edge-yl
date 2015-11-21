class CreateConferences < ActiveRecord::Migration
  def change
    create_table :conferences do |t|

      t.date :end_data, null: false
      t.string :location, null: false
      t.date :start_date, null: false

      t.timestamps null: false
    end
  end
end
