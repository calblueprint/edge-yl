(() => {
  class StudentsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'restoreStudents',
        'storeConference',
        'storeStudents',
      );
    }

    // --------------------------------------------------
    // Listeners
    // --------------------------------------------------
    attachListener() {
      window.onpopstate = (event) => this.restoreStudents(event.state);
      return true;
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchStudents(conference, page, query) {
      var resolve = (response) => {
        response.meta.initial = true;
        response.meta.query = query;
        this.storeConference(conference);
        this.storeStudents(response);
      };
      Requester.get(
        ApiConstants.students.index(conference.id, page, query),
        resolve,
      );
      return true;
    }

    exportAllStudents() {
      Requester.csv(ApiConstants.csvs.students_all, 'students');
      return true;
    }

    exportStudents() {
      var query = StudentsStore.getState().query;
      var conference = StudentsStore.getState().conference;
      Requester.csv(ApiConstants.csvs.students(conference.id, query), 'students');
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeFilter(active, key, selected) {
      if (selected) {
        var conference = StudentsStore.getState().conference;
        var query = StudentsStore.getState().query;
        if (selected !== 'None') {
          query[key] = selected;
        } else if (selected === 'None') {
          delete query[key];
        }
        var resolve = (response) => {
          response.meta.query = query;
          this.storeStudents(response);
        };
        Requester.get(
          ApiConstants.students.index(conference.id, 1, query),
          resolve,
        );
      }
      return {
        active: active,
        key: key,
      };
    }

    storePage(page) {
      var conference = StudentsStore.getState().conference;
      var query = StudentsStore.getState().query;
      var resolve = (response) => {
        response.meta.query = query;
        this.storeStudents(response);
      };
      Requester.get(
        ApiConstants.students.index(conference.id, page, query),
        resolve,
      );
      return true;
    }

    storeSort(active, key, selected) {
      if (selected) {
        var conference = StudentsStore.getState().conference;
        var query = StudentsStore.getState().query;
        if (selected !== 'None') {
          query.sort = `${key} ${selected}`;
        } else if (selected === 'None') {
          delete query.sort;
        }
        var resolve = (response) => {
          response.meta.query = query;
          this.storeStudents(response);
        };
        Requester.get(
          ApiConstants.students.index(conference.id, 1, query),
          resolve,
        );
      }
      return {
        active: active,
        key: key,
      };
    }
  }
  this.StudentsActions = alt.createActions(StudentsActions);
})();
