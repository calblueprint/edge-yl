class CreateComments < ActiveRecord::Migration

  def change
    create_table :comments do |t|
      t.string :content, null: false

      t.references :student, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end

end
