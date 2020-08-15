class CreateAlphabets < ActiveRecord::Migration[6.0]
  def change
    create_table :alphabets do |t|
      t.string :word
      t.string :wordUrl
      t.string :wordSpanish
      t.timestamps
    end
  end
end
