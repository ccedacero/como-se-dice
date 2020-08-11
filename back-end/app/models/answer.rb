class Answer < ApplicationRecord
    has_many :user_answers
    belongs_to :question
end
