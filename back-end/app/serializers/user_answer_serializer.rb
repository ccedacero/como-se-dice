class UserAnswerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :test_question
  has_one :answer
  has_one :user
end
