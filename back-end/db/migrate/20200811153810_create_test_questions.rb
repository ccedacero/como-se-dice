class CreateTestQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :test_questions do |t|
      t.integer :test_id
      t.integer :question_id

      t.timestamps
    end
  end
end
