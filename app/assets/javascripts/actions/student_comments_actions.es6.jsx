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
  }
  this.StudentCommentsActions = alt.createActions(StudentCommentsActions);
})();
