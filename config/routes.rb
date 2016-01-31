  Rails.application.routes.draw do

  root 'pages#login'

  get 'email', to: 'pages#email'
  get 'feedback', to: 'pages#feedback'
  get 'login', to: 'pages#login'
  get 'signup', to: 'pages#signup'
  get 'profile', to: 'users#profile'

  resources :conferences, only: [:index, :show]
  resources :emails, only: [:draft, :index, :show]
  resources :forms, only: [:show]
  resources :groups, only: [:index, :show]
  resources :rooms, only: [:index, :show]
  resources :students, only: [:index, :show]
  resources :schools, only: [:index, :show]
  resources :users, only: [:index, :show]

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
    get '/searchables/search', to: 'searchables#search'

    get '/users/profile', to: 'users#profile'

    resources :conferences, only: [:create, :index, :show, :update]
    resources :comments, only: [:create]
    resources :emails, only: [:create, :draft, :index, :show]
    resources :feedbacks, only: [:create]
    resources :forms, only: [:show]
    resources :groups, only: [:create, :index, :show, :update]
    resources :leaderships, only: [:update]
    resources :profiles, only: [:update]
    resources :rooms, only: [:index, :show, :update]
    resources :schools, only: [:create, :index, :show, :update]
    resources :students, only: [:create, :index, :show, :update]
    resources :users, only: [:index, :show, :update] do
      get '/groupables', on: :collection, to: 'users#groupables'
    end
  end
end
