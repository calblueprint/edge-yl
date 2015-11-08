  Rails.application.routes.draw do

  root 'pages#login'

  get 'login', to: 'pages#login'
  get 'mail', to: 'pages#mail'
  get 'signup', to: 'pages#signup'

  get 'profile', to: 'users#profile'

  resources :forms, only: [:show]
  resources :students, only: [:index, :show]
  resources :schools, only: [:index, :show]
  resources :users, only: [:index]

  namespace :api do
    # devise_for :users, path_names: {
    #   sign_in: 'login',
    #   sign_out: 'logout',
    #   sign_up: 'signup',
    # }

    devise_scope :user do
      post '/users/signup', to: 'registrations#create'

      post   '/users/login', to: 'sessions#create'
      delete '/users/logout', to: 'sessions#destroy'

      post '/users/confirmations', to: 'confirmations#create'

      post  '/users/password', to: 'passwords#create'
      patch '/users/password', to: 'passwords#update'
    end

    resources :students, only: [:create, :index, :show]
    resources :schools, only: [:create, :index, :show]
  end

end
