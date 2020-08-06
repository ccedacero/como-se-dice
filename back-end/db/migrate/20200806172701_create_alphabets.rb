class CreateAlphabets < ActiveRecord::Migration[6.0]
  def change
    create_table :alphabets do |t|
      t.string :letter

      t.timestamps
    end
  end
end
