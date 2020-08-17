class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :category
      t.integer :test_id
      t.timestamps
    end
  end
end
