class CreateEmails < ActiveRecord::Migration

  def change
    create_table :emails do |t|
      t.string :content, null: false
      t.string :from, null: false
      t.boolean :is_draft, null: false, default: false
      t.boolean :is_sent, null: false, default: false
      t.boolean :is_unread, null: false, default: true
      t.string :sender, null: false
      t.string :subject, null: false
      t.string :recipient, null: false
      t.string :to, null: false

      t.references :email_thread, index: true
      t.references :emailable, index: true, polymorphic: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end

end
