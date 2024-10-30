Rails.application.routes.draw do
    resources :countries, only: [ :index ]
    resources :teams, only: [ :index ]
    resources :competitions, only: [ :index ]
    resources :forecasts, only: [ :index ]
    resources :sports, only: [ :index ]
end
