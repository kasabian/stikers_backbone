class CreateStikers < ActiveRecord::Migration
  def change
    create_table :stikers do |t|
      t.string :name
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
