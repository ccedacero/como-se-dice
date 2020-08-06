class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.integer :forum_id
      t.integer :user_id
      t.string :title

      t.timestamps
    end
  end
end
