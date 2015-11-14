(() => {
  class StudentStore {

    constructor() {
      this.sidebar = true;
      this.student = {};
      this.bindListeners({
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
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
});
