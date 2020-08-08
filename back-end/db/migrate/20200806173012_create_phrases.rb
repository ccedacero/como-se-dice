class CreatePhrases < ActiveRecord::Migration[6.0]
  def change
    create_table :phrases do |t|
      t.string :sentence
      t.string :sentenceSpanish
      t.timestamps
    end
  end
end
