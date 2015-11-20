(() => {
  class StudentCommentsActions {

    constructor() {
      this.generateActions(
        'storeStudentComments',
        'storeStudentComment'
      );
    }

    fetchStudentComments(id) {
      resolve = (response) => this.storeStudentComments(response);
      Requester.get(ApiConstants.students.comments.index(id), resolve);
      return true;
    }

    createStudentComment(id, params) {
      resolve = (response) => this.storeStudentComment(response);
      Requester.post(ApiConstants.students.comments.create(id), params, resolve);
      return true;
    }
  }
  this.StudentCommentsActions = alt.createActions(StudentCommentsActions);
})();
