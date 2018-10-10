class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :position
      t.string :email
      t.timestamps
    end
  end
end
