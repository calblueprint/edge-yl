class FormsController < BaseController

  skip_before_filter :authenticate_user

  def preview
    @id = params[:id]
    @target = params[:target]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by id: @id
      if school_submission.nil?
        error_404
      elsif !school_submission.nil? && !school_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil?
        error_404
      elsif !student_submission.nil? && !student_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
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
      if school_submission.nil?
        error_404
      elsif !school_submission.nil? && !school_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil?
        error_404
      elsif !student_submission.nil? && !student_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
      end
    else
      error_404
    end
  end

  def start
    @id = params[:id]
    @target = params[:target]
    if @target != 'school'
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
