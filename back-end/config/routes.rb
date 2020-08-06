Rails.application.routes.draw do
  resources :quizzes
  resources :user_quizzes
  resources :comments
  resources :topics
  resources :forums
  resources :phrases
  resources :vocabs
  resources :vowels
  resources :alphabets
  resources :languages
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
