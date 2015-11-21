(() => {
  class StudentCommentsStore {

    constructor() {
      this.comments = [];
      this.bindListeners({
        handleStoreStudentComment: StudentCommentsActions.STORE_STUDENT_COMMENT,
        handleStoreStudentComments: StudentCommentsActions.STORE_STUDENT_COMMENTS,
      });
    }

    handleStoreStudentComment(response) {
      var comments = this.comments;
      comments.push(response.comment);
      this.comments = comments;
    }

    handleStoreStudentComments(response) {
      this.comments = response.comments;
    }
  }
  this.StudentCommentsStore = alt.createStore(StudentCommentsStore);
})();
