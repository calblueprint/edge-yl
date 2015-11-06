class AddSchoolIdToStudent < ActiveRecord::Migration
  def change
    add_column :students, :school_id, :integer, null: false
  end
end
