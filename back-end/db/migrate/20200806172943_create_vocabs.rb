class CreateVocabs < ActiveRecord::Migration[6.0]
  def change
    create_table :vocabs do |t|
      t.string :word
      t.string :wordUrl
      t.string :wordSpanish
      t.string :category
      t.timestamps
    end
  end
end
