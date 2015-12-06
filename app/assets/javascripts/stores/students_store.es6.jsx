(() => {
  class StudentsStore {

    constructor() {
      this.filters = [
        {
          active: false,
          key: 'first_name',
          name: 'First Name',
          options: ['ASC', 'DESC', 'None'],
          selected: 'None',
        },
        {
          active: false,
          key: 'last_name',
          name: 'Last Name',
          options: ['ASC', 'DESC', 'None'],
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
        handleStoreFilter: StudentsActions.STORE_FILTER,
        handleStoreStudents: StudentsActions.STORE_STUDENTS,
        handleToggleSidebar: StudentsActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreFilter(params) {
      var target = this.filters.filter((filter) => filter.key === params.key)[0];
      target.active = params.active;
      if (params.selected) {
        target.selected = params.selected;
      }
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
