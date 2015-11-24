(() => {
  class StudentsStore {

    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.sidebar = true;
      this.students = [];
      this.bindListeners({
        handleToggleSidebar: StudentsActions.TOGGLE_SIDEBAR,
        handleUpdateStudents: StudentsActions.UPDATE_STUDENTS,
      });
      this.filters = [
        ['Female', 'Male', 'Other'],
        ['One', 'Two', 'Three']]
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }

    handleUpdateStudents(response) {
      this.pagination = response.meta.pagination;
      this.students = response.students;
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
