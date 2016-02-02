class Api::EmailsController < Api::BaseController

  skip_before_filter :authenticate_user

  def create
    custom_params = ActionController::Parameters.new(
      content: params['body-plain'],
      from: params[:from],
      recipient: params[:recipient],
      sender: params[:sender],
      to: params[:to],
      subject: params[:subject],
    )
    email = Email.new create_params(custom_params)
    if email.save
      render json: { message: 'Received' }, status: :ok
    else
      unprocessable_response email
    end
  end

  def draft
    email = Email.new draft_params.merge(
      from: "\"#{current_user.full_name}\"<#{current_user.email}>",
      sender: current_user.email,
    )

    if email.save
      render json: email,
             serializer: EmailBaseSerializer,
             status: :created
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
    render json: email, serializer: EmailShowSerializer
  end

  def update
    email = Email.find params[:id]
    if student.update_attributes create_params
      render json: email,
             serializer: EmailBaseSerializer,
             status: :created
    else
      unprocessable_response email
    end

  end

  private

  def create_params(params)
    params.permit(
      :content,
      :from,
      :recipient,
      :sender,
      :subject,
      :to,
    )
  end

  def draft_params
    params.require(:email).permit(
      :emailable_id,
      :emailable_type
    )
  end

end
