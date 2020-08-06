class TopicSerializer < ActiveModel::Serializer
  attributes :id, :forum_id, :user_id, :title
end
