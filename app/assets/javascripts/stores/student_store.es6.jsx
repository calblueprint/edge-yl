(() => {
  class StudentStore {

    constructor() {
      this.comments = [];
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = true;
      this.student = {
        school: {},
        student_conference: {},
      };
      this.bindListeners({
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreComments: StudentActions.STORE_COMMENTS,
        handleStoreOverlay: StudentActions.STORE_OVERLAY,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreComment(response) {
      // TODO(Warren): Check if this can be refactored cleverly.
      var comments = this.comments;
      comments.push(response.comment);
      this.comments = comments;
    }

    handleStoreComments(response) {
      this.comments = response.comments;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreStudent(response) {
      this.overlay.active = false;
      this.student = response.student;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
