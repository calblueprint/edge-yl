class CreateVisits < ActiveRecord::Migration

  def change
    create_table :visits do |t|
      t.references :visitable, index: true, polymorphic: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end

end
