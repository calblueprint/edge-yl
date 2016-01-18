(() => {
  class StudentsStore {

    constructor() {
      this.filters = [
        {
          active: false,
          key: 'is_flagged',
          name: 'Flagged?',
          options: ['TRUE', 'FALSE', 'None'],
          selected: 'None',
        },
      ];
      this.sorts = [
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
      this.students = [];
      this.bindListeners({
        handleStoreFilter: StudentsActions.STORE_FILTER,
        handleStoreSort: StudentsActions.STORE_SORT,
        handleStoreStudents: StudentsActions.STORE_STUDENTS,
      });
    }

    handleStoreFilter(params) {
      var target = this.filters.filter((filter) => filter.key === params.key)[0];
      target.active = params.active;
      if (params.selected) {
        target.selected = params.selected;
      }
    }

    handleStoreSort(params) {
      var target = this.sorts.filter((sort) => sort.key === params.key)[0];
      target.active = params.active;
      if (params.selected) {
        target.selected = params.selected;
      }
    }

    handleStoreStudents(response) {
      this.pagination = response.meta.pagination;
      this.students = response.students;
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
