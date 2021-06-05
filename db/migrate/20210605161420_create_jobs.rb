class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.integer :salary
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
