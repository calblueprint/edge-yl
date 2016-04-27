class DeviseCreateUsers < ActiveRecord::Migration

  def change
    create_table(:users) do |t|
      t.string   :confirmation_token # confirmable
      t.datetime :confirmed_at # confirmable
      t.datetime :confirmation_sent_at # confirmable
      t.datetime :current_sign_in_at # trackable
      t.inet     :current_sign_in_ip # trackable
      t.string   :email, default: '', null: false # authenticatable
      t.string   :encrypted_password, default: '', null: false # authenticatable
      t.string   :first_name, null: false # custom
      t.boolean  :has_sidebar, default: true, null: false # custom
      t.boolean  :is_admin, default: false, null: false # custom
      t.string   :last_name, null: false # custom
      t.datetime :last_sign_in_at # trackable
      t.inet     :last_sign_in_ip # trackable
      t.datetime :remember_created_at # rememberable
      t.string   :reset_password_token # recoverable
      t.datetime :reset_password_sent_at # recoverable
      t.integer  :sign_in_count, default: 0, null: false # trackable
      t.string   :username, null: false

      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
  end

end
