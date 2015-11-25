class CreateResponsibilities < ActiveRecord::Migration
  def change
    create_table :responsibilities do |t|

      t.string :status, null: false

      t.timestamps null: false
    end
  end
end
