class Api::EmailsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  def create
    custom_params = ActionController::Parameters.new(
      content: params['body-plain'],
      from: params[:from],
      is_sent: true,
      recipient: params[:recipient],
      sender: params[:sender],
      to: params[:to],
      subject: params[:subject],
    )
    email = Email.new email_params(custom_params)
    if email.save
      render json: { message: 'Received' }, status: :ok
    else
      unprocessable_response email
    end
  end

  def index
    threads = EmailThread.page params[:page]
    render json: threads,
           serializer: PaginatedSerializer,
           each_serializer: EmailThreadIndexSerializer
  end

  def show
    thread = EmailThread.find params[:id]
    thread_emails = Email.where email_thread: thread
    thread_emails.each do |e|
      if e[:is_unread]
        e[:is_unread] = false
        e.save
      end
    end
    render json: thread, serializer: EmailThreadShowSerializer
  end

  private

  def email_params(params)
    params.permit(
      :content,
      :from,
      :recipient,
      :sender,
      :subject,
      :to,
    )
  end
end
