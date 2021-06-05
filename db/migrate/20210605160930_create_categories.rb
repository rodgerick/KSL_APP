class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :listings
      t.float :price

      t.timestamps
    end
  end
end
