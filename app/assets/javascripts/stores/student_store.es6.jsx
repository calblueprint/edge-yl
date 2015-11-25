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
      this.comments.push(response.comment);
      this.overlay.active = false;
    }

    handleStoreComments(response) {
      this.comments = response.comments;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreStudent(response) {
      this.student = response.student;
      this.overlay.active = false;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
