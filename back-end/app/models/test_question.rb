class TestQuestion < ApplicationRecord
  has_many :questions 
  has_many :user_answers
  belongs_to :test
  # belongs_to :question
end
