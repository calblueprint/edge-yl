class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.text :content

      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
