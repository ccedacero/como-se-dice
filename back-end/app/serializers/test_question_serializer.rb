class TestQuestionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :test
  has_one :question
end
