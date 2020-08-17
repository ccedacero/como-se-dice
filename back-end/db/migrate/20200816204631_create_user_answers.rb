class CreateUserAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :user_answers do |t|
      t.integer :user_id
      t.integer :question_id 
      t.integer :choice_id 
      t.boolean :is_right
      t.timestamps
    end
  end
end
