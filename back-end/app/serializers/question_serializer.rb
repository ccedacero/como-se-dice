class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :answers
end
