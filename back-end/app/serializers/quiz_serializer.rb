class QuizSerializer < ActiveModel::Serializer
  attributes :id, :language_id, :"phrase,", :word
end
