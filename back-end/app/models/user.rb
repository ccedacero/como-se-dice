class User < ApplicationRecord
    has_many :user_answers
    has_many :results
    # has_many :answered_tests, :class_name => "test", :through => :results, :foreign_key => "test_id" # again, why not?
end
