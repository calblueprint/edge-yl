class CreateEmails < ActiveRecord::Migration

  def change
    create_table :emails do |t|
      t.string :content, null: false
      t.string :sender,   null: false
      t.string :subject, null: false
      t.string :receiver, null: false

      t.timestamps null: false
    end
  end

end
