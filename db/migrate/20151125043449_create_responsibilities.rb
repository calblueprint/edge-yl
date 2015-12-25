class CreateResponsibilities < ActiveRecord::Migration

  def change
    create_table :responsibilities do |t|
      t.integer :status, null: false

      t.references :student, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end

end
