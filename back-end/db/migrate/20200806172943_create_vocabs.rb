class CreateVocabs < ActiveRecord::Migration[6.0]
  def change
    create_table :vocabs do |t|
      t.string :word

      t.timestamps
    end
  end
end
