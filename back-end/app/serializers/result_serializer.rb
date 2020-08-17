class ResultSerializer < ActiveModel::Serializer
  attributes :id, :no_correct, :no_incorrect, :score
  # has_one :test
  # has_one :user
end
