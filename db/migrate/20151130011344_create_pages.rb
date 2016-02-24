class CreatePages < ActiveRecord::Migration

  def change
    create_table :pages do |t|
    	t.text :description, null: false
    	t.boolean :is_last, default: false, null: false
    	t.integer :number, null: false
    	t.string :title, null: false

    	t.references :form, index: true

      t.timestamps null: false
    end
  end

end
