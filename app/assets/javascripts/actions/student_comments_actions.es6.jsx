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

    createStudentComments(request_params, student_id) {
      resolve = (response) => {
        comments = StudentCommentsStore.comments
        this.updateStudentComments(comments.push(response));
      }
      ApiConstants.students.comments.create(student_id, params,resolve);
    }
  }
  this.StudentCommentsActions = alt.createActions(StudentCommentsActions);
})();
