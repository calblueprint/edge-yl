class CreateSchoolSubmissions < ActiveRecord::Migration

  def change
    create_table :school_submissions do |t|
      t.string :address_city
      t.string :address_one
      t.string :address_state
      t.string :address_two
      t.string :address_zip
      t.string :name
      t.string :website
    end
  end

end
