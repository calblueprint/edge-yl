source 'https://rubygems.org'
ruby '2.2.1'

# Rails
gem 'rails', '4.2.1'

# Core
gem 'active_model_serializers', '~> 0.10.0.rc1'
gem 'devise'
gem 'figaro'
gem 'kaminari', '~> 0.16.2'
gem 'pg'
gem 'pg_search'
gem 'react-rails', '~> 1.4.0'

# Client
gem 'jbuilder', '~> 2.0'
gem 'jquery-rails'
gem 'sass-rails', '~> 5.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'turbolinks'
gem 'uglifier', '>= 1.3.0'

group :development, :staging, :test do
  gem 'faker'
end

group :development, :test do
  gem 'awesome_print'
  gem 'better_errors'
  gem 'quiet_assets'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
end

group :development do
  gem 'annotate'
  gem 'letter_opener'
end

group :test do
  gem 'capybara', '~> 2.4.4'
  gem 'guard-rspec'
  gem 'launchy'
end

group :production do
  gem 'rails_12factor'
end
