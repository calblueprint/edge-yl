class Api::DraftsController < Api::BaseController

  def create
    draft = Email.draft draft_params
    draft.user = current_user
    if draft.save
      render json: draft,
             serializer: DraftBaseSerializer,
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
      :emailable_id,
      :emailable_type,
      :is_draft,
      :subject,
    )
  end

end
