class UserAnswer < ApplicationRecord
  belongs_to :test_question
  belongs_to :answer
  belongs_to :user
end
