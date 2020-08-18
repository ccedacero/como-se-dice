Rails.application.routes.draw do
  resources :cardtracks
  resources :results
  resources :user_answers
  resources :answers
  resources :questions
  resources :test_questions
  resources :tests
  resources :phrases
  resources :vocabs
  resources :vowels
  resources :alphabets
  resources :languages
  resources :users, only: [:create]
  get "/total", to: "results#total"
  post "/login", to: "users#login"
  get "/autologin", to: "users#autologin"
  get "/logout", to: "users#logout"
  # patch "/profile", to: "users#profile"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
