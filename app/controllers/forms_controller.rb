class FormsController < BaseController

  skip_before_filter :authenticate_user

  def preview
    @id = params[:id]
    @target = params[:target]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by id: @id
      if school_submission.nil? || !school_submission.is_previewable?
        error_404
      elsif !school_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil? || !student_submission.is_previewable?
        error_404
      elsif !student_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
      end
    else
      error_404
    end
  end

  def show
    @id = params[:id]
    @page = params[:page] ? params[:page].to_i : nil
    @target = params[:target]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by id: @id
      if school_submission.nil?
        error_404
      elsif !school_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
      end
      page_progress = school_submission.page_progress
      if @page.nil?
        @page = page_progress
      end
      if @page > page_progress
        redirect_to forms_path(id: @id, target: @target, page: page_progress)
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil?
        error_404
      elsif !student_submission.is_active
        redirect_to forms_success_path(id: @id, target: @target)
      end
      page_progress = student_submission.page_progress
      if @page.nil?
        @page = page_progress
      end
      if @page > page_progress
        redirect_to forms_path(id: @id, target: @target, page: page_progress)
      end
    else
      error_404
    end
  end

  def start
    @id = params[:id]
    @target = params[:target]
    if @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil?
        error_404
      end
    elsif @target != 'school' || !@id.nil?
      error_404
    end
  end

  def success
    @id = params[:id]
    @target = params[:target]
    if @target == 'school'
      school_submission = SchoolSubmission.find_by id: @id
      if school_submission.nil? || school_submission.is_active
        error_404
      end
    elsif @target == 'student'
      student_submission = StudentSubmission.find_by id: @id
      if student_submission.nil? || student_submission.is_active
        error_404
      end
    else
      error_404
    end
  end

end
