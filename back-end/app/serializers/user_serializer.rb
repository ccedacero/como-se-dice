class UserSerializer < ActiveModel::Serializer
  attributes :id, :"name,", :"username,", :"email,", :"password,", :"language,", :userquiz
end
