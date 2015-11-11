class Api::Students::CommentsController < Api::BaseController

  def index
    student = Student.find params[:student_id]
    comments = student.comments
    render json: comments, each_serializer: CommentIndexSerializer
  end

end
