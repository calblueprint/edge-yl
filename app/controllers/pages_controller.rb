class PagesController < ApplicationController

	def login
    @is_login = true
    render 'authentication'
	end

  def signup
    @is_login = false
    render 'authentication'
  end

  def profile

  end
end
