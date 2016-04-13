class CreateResponsibilities < ActiveRecord::Migration

  def change
    create_table :responsibilities do |t|
      t.references :conference, index: true, null: false
      t.references :school, index: true, null: false
      t.references :user, index: true

      t.timestamps null: false
    end
  end

end
