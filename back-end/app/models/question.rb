class Question < ApplicationRecord
    has_many :answers 
    # belongs_to :test_question
end