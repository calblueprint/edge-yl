class Api::Students::CommentsController < Api::BaseController
  # TODO (warren) Check if we should extend ApiBaseController

  def index
    student = Student.find params[:student_id]
    comments = student.comments
    render json: comments, each_serializer: CommentIndexSerializer
  end

end
