class Api::Students::CommentsController < Api::BaseController
    # TODO (warren) Check if we should extend ApiBaseController

    respond_to :json

    def index
        student = Student.find params[:student_id]
        comments = student.comments
        render json: comments
    end

end
