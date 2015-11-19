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
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
        handleUpdateOverlay: StudentActions.UPDATE_OVERLAY,
        handleUpdateStudent: StudentActions.UPDATE_STUDENT,
      });
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }

    handleUpdateStudent(student) {
      this.overlay.active = false;
      this.student = student;
    }

    handleUpdateOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
