(() => {
  class StudentsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'restoreStudents',
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
    fetchStudents(page, query) {
      var resolve = (response) => {
        response.meta.query = query;
        this.storeStudents(response);
      };
      Requester.get(ApiConstants.students.index(page, query), resolve);
      return true;
    }

    exportStudents() {
      var resolve = (response) => {
        var a = document.createElement('a');
        a.href = 'data:attachment/csv,' + encodeURIComponent(response);
        a.target = '_blank';
        a.download = 'students.csv';
        document.body.appendChild(a);
        a.click();
      };
      Requester.csv(ApiConstants.csvs.students, resolve);
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeFilter(key, active, selected) {
      if (selected) {
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
        Requester.get(ApiConstants.students.index(1, query), resolve);
      }
      return {
        active: active,
        key: key,
      };
    }

    storePage(page) {
      var query = StudentsStore.getState().query;
      var resolve = (response) => {
        response.meta.query = query;
        this.storeStudents(response);
      };
      Requester.get(ApiConstants.students.index(page, query), resolve);
      return true;
    }

    storeSort(key, active, selected) {
      if (selected) {
        var query = StudentsStore.getState().query;
        if (selected !== 'None') {
          query.order = `${key} ${selected}`;
        } else if (selected === 'None') {
          delete query.order;
        }
        var resolve = (response) => {
          response.meta.query = query;
          this.storeStudents(response);
        };
        Requester.get(ApiConstants.students.index(1, query), resolve);
      }
      return {
        active: active,
        key: key,
      };
    }
  }
  this.StudentsActions = alt.createActions(StudentsActions);
})();
