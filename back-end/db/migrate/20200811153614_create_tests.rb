class CreateTests < ActiveRecord::Migration[6.0]
  def change
    create_table :tests do |t|
      t.string :name
      t.datetime :date_from
      t.datetime :date_to
      t.integer :timing
      t.integer :test_questions_id

      t.timestamps
    end
  end
end
