Rails.application.routes.draw do

  namespace :api do
    resources :teams do
      resources :bars 
    end
    resources :bars do
      resources :posts 
    end
    get '/barsearch/:barname', to: "bar_search#show"
    get '/barfind/:yelp_id', to: "bar_find#show"
  end



end
