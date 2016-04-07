class Api::SearchablesController < Api::BaseController

  def check_in
    documents = PgSearch.multisearch(params[:query])
                        .where(searchable_type: 'Student')
                        .limit(4)
    documents = documents.select do |document|
      document.searchable.conference_id == params[:conference_id].to_i
    end
    render json: documents,
           each_serializer: SearchableBaseSerializer
  end

  def search
    searchables = PgSearch.multisearch(params[:query]).page(1).per(5)
    render json: searchables,
           serializer: PaginatedSerializer,
           each_serializer: SearchableBaseSerializer
  end

  def students
    documents = PgSearch.multisearch(params[:query])
                        .where(searchable_type: 'Student')
                        .limit(4)
    documents = documents.select do |document|
      document.searchable.conference_id == params[:conference_id].to_i &&
        document.searchable.group_id != params[:group_id].to_i
    end
    render json: documents,
           each_serializer: SearchableBaseSerializer
  end

end
