class User < ApplicationRecord
    has_many :results
    has_many :answers
    has_secure_password
    # has_many :answered_tests
end
