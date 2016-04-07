class SubmissionsMailer < ApplicationMailer

  def create_student(student_submission)
    @student_submission = student_submission
    name = student_submission.full_name
    mail to: student_submission.email,
         subject: "EDGE Student Registration | #{name}",
         template_path: 'mails'
  end

  def create_parent(student_submission)
    @student_submission = student_submission
    # mail to: student_submission.
  end

  def submit_school(school_submission)
    @school_submission = school_submission
    name = school_submission.name
    mail to: @school_submission.contact_email,
         subject: "EDGE School Registration Confirmation | #{name}",
         template_path: 'mails'
  end

  def submit_student(student_submission)
    @student_submission = student_submission
    name = student_submission.full_name
    mail to: @student_submission.email,
         subject: "EDGE Student Registration Confirmation | #{name}",
         template_path: 'mails'
  end

end
