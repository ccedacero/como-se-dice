class ResultSerializer < ActiveModel::Serializer
  attributes :id, :no_correct, :no_incorrect, :no_unanswered, :score, :rank
  has_one :test
  has_one :user
end
