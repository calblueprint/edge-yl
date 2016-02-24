class CreateSchoolSubmissions < ActiveRecord::Migration

  def change
    create_table :school_submissions do |t|
      t.string :address_city
      t.string :address_one
      t.string :address_state
      t.string :address_two
      t.string :address_zip
      t.integer :current_page, default: 0, null: false
      t.boolean :is_draft, default: true, null: false
      t.string :name
      t.string :website
    end
  end

end
