class TestSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_from, :date_to, :timing, :no_of_questions
end
