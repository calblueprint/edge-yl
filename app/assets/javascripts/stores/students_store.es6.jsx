(() => {
  class StudentsStore {

    constructor() {
      this.filters = [
        {
          key: 'first_name',
          name: 'First Name',
          options: ['ASC', 'DESC', 'N/A'],
          selected: 'None',
        },
        {
          key: 'last_name',
          name: 'Last Name',
          options: ['ASC', 'DESC', 'N/A'],
          selected: 'None',
        },
      ];
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.sidebar = true;
      this.students = [];
      this.bindListeners({
        handleStoreStudents: StudentsActions.STORE_STUDENTS,
        handleToggleSidebar: StudentsActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreStudents(response) {
      this.pagination = response.meta.pagination;
      this.students = response.students;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
