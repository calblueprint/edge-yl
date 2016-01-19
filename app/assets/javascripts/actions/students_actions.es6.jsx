(() => {
  class StudentsActions {

    constructor() {
      this.generateActions(
        'restoreStudents',
        'storeStudents',
      );
    }

    attachListener() {
      window.onpopstate = (event) => this.restoreStudents(event.state);
      return true;
    }

    fetchStudents(page) {
      var resolve = (response) => this.storeStudents(response);
      Requester.get(ApiConstants.students.index(page), resolve);
      return true;
    }

    storeFilter(key, active, selected) {
      if (selected) {
        var query = StudentsStore.getState().query;
        if (selected !== 'None') {
          query[key] = `${key} = ${selected}`;
        } else if (selected === 'None') {
          delete query[key];
        }
        var resolve = (response) => this.storeStudents(response);
        Requester.get(ApiConstants.students.index(1, query), resolve);
      }
      return {
        active: active,
        key: key,
        selected: selected,
      };
    }

    storeSort(key, active, selected) {
      if (selected) {
        var query = StudentsStore.getState().query;
        if (selected !== 'None') {
          query.order = `${key} ${selected}`;
        } else if (selected === 'None') {
          delete query.order;
        }
        var resolve = (response) => this.storeStudents(response);
        Requester.get(ApiConstants.students.index(1, query), resolve);
      }
      return {
        active: active,
        key: key,
        selected: selected,
      };
    }
  }
  this.StudentsActions = alt.createActions(StudentsActions);
})();
