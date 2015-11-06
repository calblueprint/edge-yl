class PagesController < ApplicationController

  def login
    if user_signed_in?
      redirect_to students_path
    end
  end

  def mail
  end

  def profile
  end

  def signup
  end

end
