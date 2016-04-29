class SubmissionsMailer < ApplicationMailer

  def create_student(student_submission)
    @student_submission = student_submission
    name = student_submission.full_name
    mail subject: "EDGE Student Registration | #{name}",
         template_path: 'mails',
         to: student_submission.email
  end

  def create_parent(student_submission)
    @student_submission = student_submission
    name = student_submission.full_name
    mail subject: "EDGE Student Registration | #{name}",
         template_path: 'mails',
         to: student_submission.guardian_one_email
  end

  def submit_school(school_submission)
    @conference = Conference.find school_submission.conference_id
    @school_submission = school_submission
    name = school_submission.name
    mail subject: "EDGE School Registration Confirmation | #{name}",
         template_path: 'mails',
         to: @school_submission.contact_email
  end

  def submit_student(student_submission)
    @student_submission = student_submission
    name = student_submission.full_name
    mail subject: "EDGE Student Registration Confirmation | #{name}",
         template_path: 'mails',
         to: @student_submission.email
  end

  def submit_parent(student_submission)
    @student_submission = student_submission
    name = student_submission.full_name
    mail subject: "EDGE Student Registration Confirmation | #{name}",
         template_path: 'mails',
         to: @student_submission.guardian_one_email
  end
end
