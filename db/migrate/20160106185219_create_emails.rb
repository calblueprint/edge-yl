class CreateEmails < ActiveRecord::Migration

  def change
    create_table :emails do |t|
      t.string :content, null: false
      t.string :from, null: false
      t.string :sender, null: false
      t.string :subject, null: false
      t.string :recipient, null: false
      t.string :to, null: false

      t.timestamps null: false
    end
  end

end
