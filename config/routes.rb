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

  devise_for :users, controllers: {
    registrations: 'registrations',
    sessions: 'sessions',
  }, path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    sign_up: 'signup',
  }

  namespace :api do
    resources :students, only: [:create, :index, :show]
    resources :schools, only: [:index, :show]
  end

end
