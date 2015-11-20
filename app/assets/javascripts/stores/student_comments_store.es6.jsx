(() => {
  class StudentCommentsStore {

    constructor() {
      this.comments = [];
      this.bindListeners({
        handleStoreStudentComment: StudentCommentsActions.STORE_STUDENT_COMMENT,
        handleStoreStudentComments: StudentCommentsActions.STORE_STUDENT_COMMENTS,
      });
    }

    handleStoreStudentComment(comment) {
      var comments = this.comments;
      comments.push(comment);
      this.comments = comments;
    }

    handleStoreStudentComments(response) {
      this.comments = response.comments;
    }
  }
  this.StudentCommentsStore = alt.createStore(StudentCommentsStore);
})();
