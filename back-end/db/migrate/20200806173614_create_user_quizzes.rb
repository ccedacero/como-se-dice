class CreateUserQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :user_quizzes do |t|
      t.integer :quiz_id
      t.integer :user_id

      t.timestamps
    end
  end
end
