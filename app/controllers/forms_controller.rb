class FormsController < BaseController

  skip_before_filter :authenticate_user, only: [:preview, :show, :success]

  def preview
    @target = params[:target]
    @uuid = params[:uuid]
  end

  def show
    @page = params[:page] ? params[:page].to_i : 1
    @target = params[:target]
    @uuid = params[:uuid]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by uuid: @uuid
      if @page > 1 && school_submission.nil?
        redirect_to forms_path(target: @target)
      elsif school_submission.nil? && !@uuid.nil?
        redirect_to forms_path(target: @target)
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by uuid: @uuid
      if student_submission.nil?
        error_404
      end
    else
      error_404
    end
  end

  def success
    @target = params[:target]
    @uuid = params[:uuid]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by uuid: @uuid
      if school_submission.nil?
        error_404
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by uuid: @uuid
      if student_submission.nil?
        error_404
      end
    else
      error_404
    end
  end

end
