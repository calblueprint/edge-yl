class FormsController < BaseController

  skip_before_action :authenticate_user

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
      return
    end
    page_progress = school_submission.page_progress
    if @page.nil? || @page < 1 || @page > page_progress
      redirect_to forms_school_path(id: @id, page: page_progress)
      return
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
      return
    end
    page_progress = student_submission.page_progress
    if @page.nil? || @page < 1 || @page > page_progress
      redirect_to forms_student_path(id: @id, page: page_progress)
      return
    end
    render 'show'
  end

  def start_school
    @conferences = Conference.active
    if @conferences.size == 0
      render 'closed'
    end
    render 'start'
  end

  def start_student
    @id = params[:id]
    student_submission = StudentSubmission.find_by id: @id
    if student_submission.nil?
      error_404
    end
    redirect_to forms_student_path(id: @id, page: 1)
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
