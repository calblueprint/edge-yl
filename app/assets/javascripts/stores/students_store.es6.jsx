(() => {
  class StudentsStore {

    constructor() {
      this.sidebar = true;
      this.students = [];
      this.bindListeners({
        handleUpdateStudents: StudentsActions.UPDATE_STUDENTS,
      });
    }

    handleUpdateStudents(students) {
      this.students = students;
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
