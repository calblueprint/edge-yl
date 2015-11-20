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

    handleStoreStudentComments(comments) {
      this.comments = comments;
    }

  }
  this.StudentCommentsStore = alt.createStore(StudentCommentsStore);
})();
