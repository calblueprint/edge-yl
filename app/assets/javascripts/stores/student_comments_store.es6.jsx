(() => {
  class StudentCommentsStore {

    constructor() {
      this.comments =[];
      this.bindListeners({
        handleUpdateStudentComments: StudentCommentsActions.UPDATE_STUDENT_COMMENTS,
      });
    }

    handleUpdateStudentComments(comments) {
      this.comments = comments;
    }
  }
  this.StudentCommentsStore = alt.createStore(StudentCommmentsStore);
})();
