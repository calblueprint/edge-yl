class FormsController < BaseController

  skip_before_filter :authenticate_user

  def preview
    @id = params[:id]
    @target = params[:target]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by id: @id
      if school_submission.nil?
        error_404
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil?
        error_404
      end
    else
      error_404
    end
  end

  def show
    @id = params[:id]
    @page = params[:page] ? params[:page].to_i : 1
    @target = params[:target]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by id: @id
      if @page > 1 && school_submission.nil?
        redirect_to forms_path(target: @target)
      elsif school_submission.nil? && !@id.nil?
        redirect_to forms_path(target: @target)
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil?
        error_404
      end
    else
      error_404
    end
  end

  def success
    @id = params[:id]
    @target = params[:target]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by id: @id
      if school_submission.nil?
        error_404
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil?
        error_404
      end
    else
      error_404
    end
  end

end
