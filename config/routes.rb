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
    post '/api/users/signup', to: 'api/registrations#create'

    post   '/api/users/login', to: 'api/sessions#create'
    delete '/api/users/logout', to: 'api/sessions#destroy'

    post '/api/users/confirmations', to: 'api/confirmations#create'

    post  '/api/users/password', to: 'api/passwords#create'
    patch '/api/users/password', to: 'api/passwords#update'
  end

  namespace :api do
    resources :students, only: [:create, :index, :show] do
      scope module: :students do
        resources :comments, only: [:index]
      end
    end
    resources :schools, only: [:create, :index, :show]
  end

end
