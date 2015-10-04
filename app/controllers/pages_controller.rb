class PagesController < ApplicationController

	def login
    @is_login = true
    render 'authorization'
	end

  def signup
    @is_login = false
    render 'authorization'
  end

  def dashboard
  end
	
end
