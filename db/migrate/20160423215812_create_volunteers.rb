class CreateVolunteers < ActiveRecord::Migration

  def change
    create_table :volunteers do |t|
      t.string   :email, default: '', null: false
      t.string   :first_name, null: false
      t.string   :last_name, null: false

      t.references :conference, index: true, null: false

      t.timestamps null: false
    end
  end

end
