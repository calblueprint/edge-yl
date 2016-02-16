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
    recipient = custom_params[:recipient]
    sender = custom_params[:sender]
    if (emailable = find_emailable(recipient)) or
        (emailable = find_emailable(sender))
      custom_params[:emailable_id] = emailable.id
      custom_params[:emailable_type] = emailable.class.name
    end
    if (user = find_user(recipient)) or
        (user = find_user(sender))
      custom_params[:user] = user
    end
    email = Email.new email_params(custom_params)
    if email.save
      render json: { message: 'Received' }, status: :ok
    else
      unprocessable_response email
    end
  end

  def index
    emails = Email.all
    render json: emails, each_serializer: EmailIndexSerializer
  end

  def show
    email = Email.find params[:id]
    if email[:is_unread]
      email[:is_unread] = false
      email.save
    end
    render json: email, serializer: EmailShowSerializer
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

  def find_emailable(email)
    emailable = Contact.where(email: email).first
    if emailable
      return emailable.school
    else
      emailable = Student.where(email: email).first
      return emailable
    end
  end

  def find_user(email)
    User.where(email: email).first
  end

end
