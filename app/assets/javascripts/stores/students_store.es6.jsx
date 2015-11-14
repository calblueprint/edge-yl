(() => {
  class StudentsStore {

    constructor() {
      this.sidebar = true;
      this.students = [];
      this.bindListeners({
        handleUpdateStudents: StudentsActions.UPDATE_STUDENTS,
        handleToggleSidebar: StudentsActions.TOGGLE_SIDEBAR,
      });
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }

    handleUpdateStudents(students) {
      this.students = students;
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
