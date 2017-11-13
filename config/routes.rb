Rails.application.routes.draw do

  namespace :api do
    resources :teams do
      resources :bars do
        resources :posts 
      end
    end
    resources :bars
  end

end
