class DraftsController < BaseController

  def index
  end

  def show
    @id = params[:id].to_i
    draft = Email.find params[:id]
    redirect_to drafts_url unless draft.is_draft
  end

end
