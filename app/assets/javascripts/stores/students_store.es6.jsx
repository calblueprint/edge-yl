(() => {
  class StudentsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.filters = this.generateFilters();
      this.query = {};
      this.sorts = this.generateSorts();
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

    // --------------------------------------------------
    // Helpers
    // --------------------------------------------------
    generateFilters() {
      return [
        {
          active: false,
          choices: ['True', 'False', 'None'],
          key: 'is_flagged',
          name: 'Flagged?',
          selected: 'None',
        },
        {
          active: false,
          choices: ['Female', 'Male', 'Other', 'None'],
          key: 'gender',
          name: 'Gender',
          selected: 'None',
        },
        {
          active: false,
          choices: ['True', 'False', 'None'],
          key: 'is_primary',
          name: 'Primary?',
          selected: 'None',
        },
      ];
    }

    generateSorts() {
      return [
        {
          active: false,
          choices: ['ASC', 'DESC', 'None'],
          key: 'first_name',
          name: 'First name',
          selected: 'None',
        },
        {
          active: false,
          choices: ['ASC', 'DESC', 'None'],
          key: 'last_name',
          name: 'Last name',
          selected: 'None',
        },
      ];
    }

    syncQuery() {
      this.filters = this.generateFilters();
      this.sorts = this.generateSorts();
      Object.keys(this.query).map((key) => {
        if (key === 'sort') {
          var pairing = this.query[key].split(' ');
          var sort = this.sorts.find((cmp) => cmp.key === pairing[0]);
          if (sort) {
            sort.selected = pairing[1];
          }
        } else if (key) {
          var value = this.query[key];
          var filter = this.filters.find((cmp) => cmp.key === key);
          if (filter) {
            filter.selected = value;
          }
        }
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleRestoreStudents(state) {
      if (state) {
        this.pagination = state.pagination;
        this.query = state.query;
        this.students = state.students;
        this.syncQuery();
      }
    }

    handleStoreFilter(params) {
      var filter = this.filters.filter((cmp) => cmp.key === params.key)[0];
      filter.active = params.active;
    }

    handleStoreSort(params) {
      var sort = this.sorts.filter((cmp) => cmp.key === params.key)[0];
      sort.active = params.active;
    }

    handleStoreStudents(response) {
      var pagination = response.meta.pagination;
      var query = response.meta.query;
      this.pagination = pagination;
      this.query = query;
      this.students = response.students;
      this.syncQuery();
      window.history.pushState(
        {
          pagination: pagination,
          query: query,
          students: this.students,
        },
        null,
        RouteConstants.students.index(pagination.current, query),
      );
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
