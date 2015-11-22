class Api::SearchablesController < Api::BaseController

  def search
    query = params[:query]
    results = PgSearch.multisearch(query)
    render json: results
  end

end
