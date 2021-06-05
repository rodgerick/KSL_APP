Rails.application.routes.draw do
 namespace :api do
  resources  :categories
  resources :items
  resources :jobs
  end

end