(() => {
  class StudentsStore {

    constructor() {
      this.sidebar = true;
      this.students = [];
      this.bindListeners({
        handleUpdateStudents: StudentsActions.UPDATE_STUDENTS,
      });
    }

    handletoggleSidebar() {
      this.sidebar = !this.sidebar;
    }

    handleUpdateStudents(students) {
      this.students = students;
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
