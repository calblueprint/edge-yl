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
      this.comments.push(comment);
    }

  }
  this.StudentCommentsStore = alt.createStore(StudentCommentsStore);
})();
