class Api::CommentsController < Api::BaseController

  def create
    comment = Comment.new comment_params
    if comment.save
      render json: comment,
             serializer: CommentBaseSerializer,
             status: :created
    else
      unprocessable_response comment
    end
  end

  def destroy
    comment = Comment.find params[:id]
    if comment.destroy
      render json: comment,
             serializer: CommentBaseSerializer,
             status: :ok
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
