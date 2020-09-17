class Test < ApplicationRecord
    has_many :results 
    has_many :questions 
    # has_many :candidates, :through => :results, :foreign_key => "candidate_id" #why not? ^^

end
