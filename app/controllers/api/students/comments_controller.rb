class Api::Students::CommentsController < Api::BaseController

  def create
    comment = Comment.new comment_params
    comment.student_id = params[:student_id]
    if comment.save
      render json: comment, serializer: CommentIndexSerializer, status: 201
    else
      unprocessable_response comment
    end
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
