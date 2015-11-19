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
      this.student = student;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
