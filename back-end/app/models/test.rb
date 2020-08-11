class Test < ApplicationRecord
    has_many :results
    has_many :test_questions
    has_many :users, through: :results
    # has_many :candidates, :through => :results, :foreign_key => "candidate_id" #why not? ^^

end
