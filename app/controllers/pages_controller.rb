class PagesController < BaseController

  before_filter :poll_authentication, only: [:login, :signup]
  skip_before_filter :authenticate_user, only: [:login, :signup]

  def compose
    @id = params[:id].to_i
  end

  def feedback
  end

  def login
  end

  def profile
  end

  def signup
  end

  private

  def poll_authentication
    if user_signed_in?
      redirect_to students_path
    end
  end

end
