class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
    	t.string :title, null: false
    	t.integer :number, null: false

    	t.references :form, index: true

      t.timestamps null: false
    end
  end
end
