  Rails.application.routes.draw do

  root 'pages#login'

  get 'email', to: 'pages#email'
  get 'feedback', to: 'pages#feedback'
  get 'forms/:target', as: 'forms', to: 'forms#show'
  get 'login', to: 'pages#login'
  get 'profile', to: 'users#profile'
  get 'signup', to: 'pages#signup'

  resources :conferences, only: [:index, :show]
  resources :drafts, only: [:index, :show]
  resources :emails, only: [:index, :show]
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
    get '/forms/:target', to: 'forms#show'
    get '/searchables/search', to: 'searchables#search'
    get '/school_submissions/:uuid', to: 'school_submissions#show'
    get '/school_submissions/:uuid'. to: 'school_submissions#show'
    get '/student_submissions/:uuid', to: 'student_submissions#show'
    patch 'student_submissions/:uuid', to: 'student_submissions#update'
    get '/users/profile', to: 'users#profile'

    resources :comments, only: [:create]
    resources :conferences, only: [:create, :index, :show, :update]
    resources :contacts, only: [:create, :update]
    resources :drafts, only: [:create, :index, :show, :update]
    resources :emails, only: [:create, :index, :show]
    resources :feedbacks, only: [:create]
    resources :groups, only: [:create, :index, :show, :update]
    resources :leaderships, only: [:update]
    resources :profiles, only: [:update]
    resources :rooms, only: [:create, :index, :show, :update]
    resources :schools, only: [:create, :index, :show, :update]
    resources :school_submissions, only: [:create]
    resources :students, only: [:create, :index, :show, :update]
    resources :student_submissions, only: [:create]
    resources :users, only: [:index, :show, :update] do
      get '/groupables', on: :collection, to: 'users#groupables'
    end
  end
end
