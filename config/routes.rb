Rails.application.routes.draw do

  namespace :api do
    resources :teams do
      resources :bars 
    end
    resources :bars do
      resources :posts 
    end
  end

end
