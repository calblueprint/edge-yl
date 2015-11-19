(() => {
  class StudentCommentsActions {

    fetchStudentComments(student_id) {
      resolve = (response) => this.updateStudentComments(response);
      Requester.get(ApiConstants.students.comments.index(student_id), resolve);
      return true;
    }

    updateStudentComments(comments) {
      return comments;
    }

    createStudentComment(params) {
      student_id = params.comment.student_id;
      resolve = (response) => addStudentComment(response);
      Requester.post(ApiConstants.students.comments.create(student_id), params, resolve);
    }

    addStudentComment(comment) {
      return comment;
    }
  }
  this.StudentCommentsActions = alt.createActions(StudentCommentsActions);
})();
