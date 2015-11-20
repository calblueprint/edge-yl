(() => {
  class StudentStore {

    constructor() {
      this.overlay = {
        active: false,
        type: '',
      };
      this.sidebar = true;
      this.student = {
        school: {},
      };
      this.bindListeners({
        handleStoreOverlay: StudentActions.STORE_OVERLAY,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
      });
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }

    handleStoreStudent(student) {
      this.overlay.active = false;
      this.student = student;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
