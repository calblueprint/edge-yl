class Api::DraftsController < Api::BaseController

  def create
    draft = Email.draft draft_params, current_user
    if draft.save
      render json: draft,
             serializer: DraftBaseSerializer,
             status: :created
    else
      unprocessable_response draft
    end
  end

  def index
    render json: current_user.drafts, each_serializer: DraftIndexSerializer
  end

  def destroy
    draft = Email.find params[:id]
    if draft.destroy
      render json: draft, serializer: EmailBaseSerializer
    else
      unprocessable_response draft
    end
  end

  def send_draft
    draft = Email.find params[:id]
    if draft.do_send draft_params
      render json: draft,
             serializer: DraftShowSerializer,
             status: :created
    else
      unprocessable_response draft
    end
  end

  def show
    email = Email.find params[:id]
    render json: email, serializer: DraftShowSerializer
  end

  def update
    draft = Email.find params[:id]
    if draft.update_attributes draft_params
      render json: draft,
             serializer: DraftShowSerializer,
             status: :created
    else
      unprocessable_response draft
    end
  end

  private

  def draft_params
    params.require(:email).permit(
      :content,
      :email_thread_id,
      :is_draft,
      :recipient,
      :sender,
      :subject,
    )
  end

end
