class Api::Students::CommentsController < Api::BaseController

  def create
    comment = Comment.new comment_params
    if comment.save
      render json: comment, serializer: CommentIndexSerializer, status: 201
    else
      unprocessable_response comment
    end
  end

  def index
    student = Student.find params[:student_id]
    comments = student.comments
    render json: comments, each_serializer: CommentIndexSerializer
  end

  private

  def comment_params
    params.require(:comment).permit(
      :content,
      :student_id,
      :user_id,
    )
  end

end
