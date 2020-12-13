class TestSerializer < ActiveModel::Serializer
  attributes :id, :name, :answers.shuffle()
end
