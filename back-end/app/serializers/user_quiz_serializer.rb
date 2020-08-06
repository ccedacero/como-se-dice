class UserQuizSerializer < ActiveModel::Serializer
  attributes :id, :quiz_id, :user_id
end
