class Api::SearchablesController < ApplicationController

  def query
    query = params[:query]
    results = PgSearch.multisearch(query)
    render json: results
  end
end
