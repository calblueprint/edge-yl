class Api::CommentsController < Api::BaseController

  def create
    comment = Comment.new comment_params
    if comment.save
      render json: comment,
             serializer: CommentBaseSerializer,
             status: 201
    else
      unprocessable_response comment
    end
  end

  private

  def comment_params
    params.require(:comment).permit(
      :commentable_id,
      :commentable_type,
      :content,
      :user_id,
    )
  end

end
