(() => {
  class StudentStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = true;
      this.student = {
        group: {},
        school: {},
      };
      this.bindListeners({
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreOverlay: StudentActions.STORE_OVERLAY,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreComment(response) {
      this.student.comments.push(response.comment);
      this.overlay.active = false;
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
