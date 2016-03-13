class CreateSchools < ActiveRecord::Migration

  def change
    create_table :schools do |t|
      t.string :address_city, null: false
      t.string :address_one, null: false
      t.string :address_state, null: false
      t.string :address_two, default: '', null: false
      t.string :address_zip, null: false
      t.string :name, null: false
      t.string :website, default: '', null: false

      t.timestamps null: false
    end
  end

end
