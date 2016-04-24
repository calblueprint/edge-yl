(() => {
  class StudentsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = {};
      this.filters = this.generateFilters();
      this.firstLoad = true;
      this.query = {};
      this.sorts = this.generateSorts();
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.students = [];
      this.bindListeners({
        handleRestoreStudents: StudentsActions.RESTORE_STUDENTS,
        handleStoreConference: StudentsActions.STORE_CONFERENCE,
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
          key: 'has_group',
          name: 'Has Group?',
          selected: 'None',
        },
        {
          active: false,
          choices: ['True', 'False', 'None'],
          key: 'has_room',
          name: 'Has Room?',
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
      if (!this.query) {
        return null;
      } else {
        return Object.keys(this.query).map((key) => {
          if (key === 'sort') {
            var pairing = this.query[key].split(' ');
            var sort = this.sorts.find((cmp) => cmp.key === pairing[0]);
            if (sort) {
              sort.selected = pairing[1];
            }
          } else if (key && key != 'conference_id') {
            var value = this.query[key];
            var filter = this.filters.find((cmp) => cmp.key === key);
            if (filter) {
              filter.selected = value;
            }
          }
        });
      }
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

    handleStoreConference(conference) {
      this.conference = conference;
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
      if (this.firstLoad) {
        this.firstLoad = false;
        window.history.replaceState(
          {
            conference: this.conference,
            pagination: pagination,
            query: query,
            students: this.students,
          },
          null,
          RouteConstants.students.index(this.conference.id, pagination.current, query),
        );
      } else {
        window.history.pushState(
          {
            conference: this.conference,
            pagination: pagination,
            query: query,
            students: this.students,
          },
          null,
          RouteConstants.students.index(this.conference.id, pagination.current, query),
        );
      }
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();
