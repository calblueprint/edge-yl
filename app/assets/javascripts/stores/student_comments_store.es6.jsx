(() => {
  class StudentCommentsStore {

    constructor() {
      this.comments = [];
      this.bindListeners({
        handleUpdateStudentComments: StudentCommentsActions.UPDATE_STUDENT_COMMENTS,
        handleCreateStudentComments: StudentCommentsActions.CREATE_STUDENT_COMMENTS,
      });
    }

    handleUpdateStudentComments(comments) {
      this.comments = comments;
    }

    handleCreateStudentComments(comment) {
      this.comments = this.comments.push(comment);
    }

  }
  this.StudentCommentsStore = alt.createStore(StudentCommentsStore);
})();
