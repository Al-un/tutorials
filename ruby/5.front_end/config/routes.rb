Rails.application.routes.draw do
  get 'home/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # routes
  # http://docs.railsbridge.org/intro-to-rails/setting_the_default_page
  root 'home#show'

  # Auth0
  get 'auth/oauth2/callback' => 'auth0#callback'
  get 'auth/failure' => 'auth0#failure'

  # Jokes zone
  namespace :jokes do
    resources :all, only: [:index, :show], controller: 'joke'
    resources :geek, only: [:index]
  end

end
