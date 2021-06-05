Rails.application.routes.draw do
  namespace :api do
    resources :categories do 
      resources :items
      resources :jobs
    end
  end
end