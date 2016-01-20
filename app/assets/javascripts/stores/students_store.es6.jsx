(() => {
  class StudentsStore {

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

    generateFilters() {
      return [
        {
          active: false,
          key: 'is_flagged',
          name: 'Flagged?',
          options: ['True', 'False', 'None'],
          selected: 'None',
        },
        {
          active: false,
          key: 'gender',
          name: 'Gender',
          options: ['Female', 'Male', 'Other', 'None'],
          selected: 'None',
        },
        {
          active: false,
          key: 'is_primary',
          name: 'Primary?',
          options: ['True', 'False', 'None'],
          selected: 'None',
        },
      ];
    }

    generateSorts() {
      return [
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
    }

    propogateQuery() {
      this.filters = this.generateFilters();
      this.sorts = this.generateSorts();
      Object.keys(this.query).map((key) => {
        if (key === 'order') {
          var pairing = this.query[key].split(' ');
          var value = pairing[1];
          var sort = this.sorts.filter(
            (sort) => sort.key === pairing[0]
          )[0];
          if (sort) {
            sort.selected = value;
          }
        } else if (key) {
          var value = this.query[key];
          var filter = this.filters.filter(
            (filter) => filter.key === key
          )[0];
          if (filter) {
            filter.selected = value;
          }
        }
      });
    }

    handleRestoreStudents(state) {
      if (state) {
        this.pagination = state.pagination;
        this.query = state.query;
        this.students = state.students;
        this.propogateQuery();
      }
    }

    handleStoreFilter(params) {
      var filter = this.filters.filter(
        (filter) => filter.key === params.key
      )[0];
      filter.active = params.active;
      if (params.selected) {
        filter.selected = params.selected;
      }
    }

    handleStoreSort(params) {
      var sort = this.sorts.filter(
        (sort) => sort.key === params.key
      )[0];
      sort.active = params.active;
      if (params.selected) {
        sort.selected = params.selected;
      }
    }

    handleStoreStudents(response) {
      this.pagination = response.meta.pagination;
      this.query = response.meta.query;
      this.students = response.students;
      this.propogateQuery();
      history.pushState(
        {
          pagination: this.pagination,
          query: this.query,
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
