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
      this.query = {};
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
        handleRestoreStudents: StudentsActions.RESTORE_STUDENTS,
        handleStoreFilter: StudentsActions.STORE_FILTER,
        handleStoreSort: StudentsActions.STORE_SORT,
        handleStoreStudents: StudentsActions.STORE_STUDENTS,
      });
    }

    handleRestoreStudents(state) {
      if (state) {
        this.filters = state.filters;
        this.pagination = state.pagination;
        this.query = state.query;
        this.sorts = state.sorts;
        this.students = state.students;
      }
    }

    handleStoreFilter(params) {
      var target = this.filters.filter((filter) => filter.key === params.key)[0];
      target.active = params.active;
      if (params.selected) {
        if (params.selected === 'None') {
          delete this.query[target.key];
        } else {
          this.query[target.key] = `${target.key} = ${params.selected}`;
        }
        target.selected = params.selected;
      }
    }

    handleStoreSort(params) {
      var target = this.sorts.filter((sort) => sort.key === params.key)[0];
      target.active = params.active;
      if (params.selected) {
        if (params.selected === 'None') {
          delete this.query.order;
        } else {
          this.query.order = `${target.key} ${params.selected}`;
        }
        target.selected = params.selected;
      }
    }

    handleStoreStudents(response) {
      this.pagination = response.meta.pagination;
      this.students = response.students;
      history.pushState(
        {
          filters: this.filters,
          pagination: this.pagination,
          query: this.query,
          sorts: this.sorts,
          students: this.students,
        },
        null,
        RouteConstants.students.index(
          this.pagination.current,
          this.query,
        ),
      );
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
