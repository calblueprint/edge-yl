(() => {
  class StudentCommentsStore {

    constructor() {
      this.comments = [];
      this.bindListeners({
        handleUpdateStudentComments: StudentCommentsActions.UPDATE_STUDENT_COMMENTS,
        handleAddStudentComment: StudentCommentsActions.ADD_STUDENT_COMMENT
      });
    }

    handleUpdateStudentComments(comments) {
      this.comments = comments;
    }

    handleAddStudentComment(comment) {
      var comments = this.comments;
      comments.push(comment);
      this.comments = comments;
    }

  }
  this.StudentCommentsStore = alt.createStore(StudentCommentsStore);
})();
