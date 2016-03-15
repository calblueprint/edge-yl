class CreateEmailThreads < ActiveRecord::Migration

  def change
    create_table :email_threads do |t|
      t.string :subject, null:false

      t.references :user, index: true

      t.timestamps null: false
    end
  end

end
