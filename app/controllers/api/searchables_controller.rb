class Api::SearchablesController < Api::BaseController

  def search
    searchables = PgSearch.multisearch params[:query]
    render json: searchables, each_serializer: SearchableBaseSerializer
  end

end
