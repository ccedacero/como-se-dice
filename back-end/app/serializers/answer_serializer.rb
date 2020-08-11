class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :references, :answer, :is_correct
end
