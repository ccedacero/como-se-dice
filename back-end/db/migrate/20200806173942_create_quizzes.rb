class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.integer :language_id
      t.string :phrase
      t.string :word

      t.timestamps
    end
  end
end
