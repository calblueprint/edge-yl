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
        school: {},
        student_conference: {},
      };
      this.bindListeners({
        handleStoreOverlay: StudentActions.STORE_OVERLAY,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
      });
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
