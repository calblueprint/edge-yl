class PagesController < BaseController

  skip_before_filter :authenticate_user, only: [:login, :signup]

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
    if user_signed_in?
      redirect_to students_path
    end
  end

end
