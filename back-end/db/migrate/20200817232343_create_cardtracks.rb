class CreateCardtracks < ActiveRecord::Migration[6.0]
  def change
    create_table :cardtracks do |t|
      t.integer :user_id 
      t.integer :vocab_id
      t.boolean :reviewed
      t.timestamps
    end
  end
end
