Rails.application.routes.draw do
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'

  # Authentication
  devise_for :users, :controller => { :registrations => "registrations" }
  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
    get 'signup', to: 'devise/registrations#new'
  end

  # Posts
  resources :posts do
    collection do
      get 'hobby'
      get 'study'
      get 'team'
    end
  end

  # Messaging
  namespace :private do
    resources :conversations, only: [:open, :create] do
      member do
        post :close
        post :open
      end
    end
    resources :messages, only: [:index, :create]
  end

  # contacts
  resources :contacts, only: [:create, :update, :destroy]
  
  # group conversation
  namespace :group do 
    resources :conversations do
      member do
        post :close
        post :open
      end
    end
    resources :messages, only: [:index, :create]
  end
  
end
