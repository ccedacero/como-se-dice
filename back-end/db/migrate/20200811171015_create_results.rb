class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.references :test, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :no_correct
      t.integer :no_incorrect
      t.integer :score
      t.timestamps
    end
  end
end
