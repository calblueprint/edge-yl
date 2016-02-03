source 'https://rubygems.org'
ruby '2.2.1'

# Rails
gem 'rails', '4.2.1'

# Core
gem 'active_model_serializers', '0.9.4'
gem 'devise', '3.5.2'
gem 'figaro', '1.1.1'
gem 'has_scope', '0.6.0'
gem 'kaminari', '0.16.3'
gem 'pg', '0.18.4'
gem 'pg_search', '1.0.5'
gem 'react-rails', '1.5.0'

# Client
gem 'font-awesome-rails', '4.5.0'
gem 'jquery-rails', '3.1.4'
gem 'sass-rails', '5.0.4'
gem 'uglifier', '2.7.2'

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

group :production, :staging do
  gem 'rails_12factor'
end
