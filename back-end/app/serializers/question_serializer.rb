class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :answers, :test
end
