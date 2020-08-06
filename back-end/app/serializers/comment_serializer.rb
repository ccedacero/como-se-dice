class CommentSerializer < ActiveModel::Serializer
  attributes :id, :topic_id, :user_id, :"integer,", :content
end
