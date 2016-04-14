class PagesController < BaseController

  before_action :poll_authentication, only: [:login, :signup]
  skip_before_action :authenticate_user, only: [:login, :signup]

  def checkin
    @conference_id = params[:conference].to_i
    @conferences = Conference.all
  end

  def feedback
  end

  def import
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
