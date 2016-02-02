class Api::DraftsController < Api::BaseController

  def create
    draft = Email.new draft_params
    draft.user = current_user
    if draft.save
      render json: draft,
             serializer: EmailBaseSerializer,
             status: :created
    else
      unprocessable_response draft
    end
  end

  def show
    email = Email.find params[:id]
    render json: email, serializer: EmailShowSerializer
  end

  def update
    draft = Email.find params[:id]
    if draft.update_attributes draft_params
      render json: draft,
             serializer: EmailBaseSerializer,
             status: :created
    else
      unprocessable_response draft
    end
  end

  private

  def draft_params
    params.require(:email).permit(
      :emailable_id,
      :emailable_type
    )
  end

end
