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

  devise_for :users, only: []
  devise_scope :user do
    post '/api/users/signup', to: 'api/users/registrations#create'

    post   '/api/users/login', to: 'api/users/sessions#create'
    delete '/api/users/logout', to: 'api/users/sessions#destroy'

    post '/api/users/confirmations', to: 'api/users/confirmations#create'

    post  '/api/users/password', to: 'api/users/passwords#create'
    patch '/api/users/password', to: 'api/users/passwords#update'
  end

  namespace :api do
    resources :schools, only: [:create, :index, :show]
    resources :students, only: [:create, :index, :show] do
      scope module: :students do
        resources :comments, only: [:index]
      end
    end
  end

end
