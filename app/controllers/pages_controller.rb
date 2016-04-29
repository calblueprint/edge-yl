class PagesController < BaseController

  before_action :poll_authentication, only: [
    :login,
    :signup,
  ]
  skip_before_action :authenticate_user, only: [
    :forgot_password,
    :login,
    :reset_password,
    :signup,
  ]

  def checkin
    @conference_id = params[:conference].to_i
    if @conference_id == 0
      @conference_id = Conference.most_recent_active_id
    end
    unless Conference.exists?(@conference_id)
      error_404
    end
    @conferences = Conference.all
  end

  def feedback
  end

  def forgot_password
  end

  def import
    @conferences = Conference.all
  end

  def login
    confirmation_token = params[:confirmation_token]
    if params[:reset_success]
      @toast = 'Password reset!'
    elsif params[:email_sent]
      @toast = 'Password reset email sent!'
    elsif params[:confirmation]
      @toast = 'Confirmation email sent!'
    end
    if confirmation_token
      user = User.where(confirmation_token: confirmation_token).first
      if user
        user.confirm
      end
    end
  end

  def profile
  end

  def reset_password
    @token = params[:reset_password_token]
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
