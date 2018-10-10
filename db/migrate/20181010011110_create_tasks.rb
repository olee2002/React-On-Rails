class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :status
      t.string :notes
      t.string :manager
      t.references :employee, foreign_key: true

      t.timestamps
    end
  end
end
