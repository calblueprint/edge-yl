Rails.application.routes.draw do
  root 'pages#login'

  get 'check_in/:conference', to: 'pages#checkin'
  get 'email', to: 'pages#email'
  get 'feedback', to: 'pages#feedback'
  get 'forgot_password', to: 'pages#forgot_password'
  get 'forms/school/start', to: 'forms#start_school'
  get 'forms/school/:id', as: 'forms_school', to: 'forms#show_school'
  get 'forms/student/:id', as: 'forms_student', to: 'forms#show_student'
  get 'forms/student/:id/start', to: 'forms#start_student'
  get 'forms/:target/:id/preview', to: 'forms#preview'
  get 'forms/:target/:id/success', as: 'forms_success', to: 'forms#success'
  get 'forms/:target/:uuid', to: 'forms#show'
  get 'forms/:target/:uuid/success', to: 'forms#success'
  get 'import', to: 'pages#import'
  get 'login', to: 'pages#login'
  get 'login', to: 'pages#login', as: 'user_confirmation'
  get 'reset_password', to: 'pages#reset_password', as: 'edit_user_password'
  get 'profile', to: 'users#profile'
  get 'signup', to: 'pages#signup'
  get 'students/:id/submission', to: 'students#submission'

  resources :conferences, only: [:index, :show]
  resources :drafts, only: [:index, :show]
  resources :groups, only: [:index, :show]
  resources :prospects, only: [:index, :show]
  resources :rooms, only: [:index, :show]
  resources :students, only: [:index, :show]
  resources :schools, only: [:index, :show]
  resources :threads, only: [:index, :show]
  resources :users, only: [:index, :show]

  devise_for :users, only: []
  devise_scope :user do
    post '/api/users/signup', to: 'api/users/registrations#create'

    post '/api/users/login', to: 'api/users/sessions#create'
    delete '/api/users/logout', to: 'api/users/sessions#destroy'

    post '/api/users/confirmations', to: 'api/users/confirmations#create'

    post '/api/users/password', to: 'api/users/passwords#create'
    patch '/api/users/password/:id', to: 'api/users/passwords#update'
    post '/api/users/passwords/request_reset', to: 'api/users/passwords#request_reset'
    post '/api/users/passwords/reset', to: 'api/users/passwords#reset'
  end

  namespace :api do
    patch '/conferences/assign_students_to_groups', to: 'conferences#assign_students_to_groups'
    patch '/conferences/assign_students_to_rooms', to: 'conferences#assign_students_to_rooms'
    patch '/contacts/promote/:id', to: 'contacts#promote'
    patch '/drafts/send/:id', to: 'drafts#send_draft'
    get '/forms/:target', to: 'forms#show'
    post '/imports/schools', to: 'imports#schools'
    post '/imports/students', to: 'imports#students'
    get '/searchables/check_in', to: 'searchables#check_in'
    get '/searchables/search', to: 'searchables#search'
    get '/searchables/students', to: 'searchables#students'
    patch '/school_submissions/:id/submit', to: 'school_submissions#submit'
    patch '/students/check_in/:id', to: 'students#check_in'
    patch '/students/check_out/:id', to: 'students#check_out'
    patch '/student_submissions/:id/submit', to: 'student_submissions#submit'
    get '/users/profile', to: 'users#profile'

    resources :comments, only: [:create, :destroy]
    resources :conferences, only: [:create, :index, :show, :update]
    resources :contacts, only: [:create, :update]
    resources :drafts, only: [:create, :index, :show, :update]
    resources :feedbacks, only: [:create]
    resources :groups, only: [:create, :destroy, :index, :show, :update]
    resources :leaderships, only: [:update]
    resources :prospects, only: [:create, :destroy, :index, :show, :update]
    resources :profiles, only: [:update]
    resources :rooms, only: [:create, :destroy, :index, :show, :update]
    resources :responsibilities, only: [:update]
    resources :schools, only: [:index, :show, :update]
    resources :school_submissions, only: [:create, :show, :update]
    resources :students, only: [:index, :show, :update]
    resources :student_submissions, only: [:create, :show, :update]
    resources :threads, only: [:create, :destroy, :index, :show]
    resources :users, only: [:index, :show, :update] do
      get '/groupables', on: :collection, to: 'users#groupables'
      get '/schoolables', on: :collection, to: 'users#schoolables'
    end
  end
end
