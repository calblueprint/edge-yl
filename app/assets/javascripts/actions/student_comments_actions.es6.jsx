(() => {
  class StudentCommentsActions {

    fetchStudentComments(id) {
      resolve = (response) => this.updateStudentComments(response);
      Requester.get(ApiConstants.students.comments.index(id), resolve);
      return true;
    }

    updateStudentComments(comments) {
      return comments;
    }

    createStudentComment(id, params) {
      resolve = (response) => this.addStudentComment(response);
      Requester.post(ApiConstants.students.comments.create(id), params, resolve);
      return true;
    }

    addStudentComment(comment) {
      return comment;
    }
  }
  this.StudentCommentsActions = alt.createActions(StudentCommentsActions);
})();
