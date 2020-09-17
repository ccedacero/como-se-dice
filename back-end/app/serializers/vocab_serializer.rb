class VocabSerializer < ActiveModel::Serializer
  attributes :id, :word, :wordSpanish, :wordUrl
end
