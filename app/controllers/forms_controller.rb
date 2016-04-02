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

  def show_school
    @id = params[:id]
    @conferences = Conference.active
    @page = params[:page] ? params[:page].to_i : nil
    @target = 'school'
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
    render 'show'
  end

  def show_student
    @id = params[:id]
    @page = params[:page] ? params[:page].to_i : nil
    @target = 'student'
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
    render 'show'
  end

  def start_school
    @conferences = Conference.all
    @target = 'school'
    render 'start'
  end

  def start_student
    @id = params[:id]
    @target = 'student'
    student_submission = StudentSubmission.find_by id: @id
    if student_submission.nil?
      error_404
    end
    render 'start'
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
