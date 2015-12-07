(() => {
  class StudentsActions {

    constructor() {
      this.generateActions(
        'storeStudents',
      );
    }

    fetchStudents(page) {
      var resolve = (response) => this.storeStudents(response);
      Requester.get(ApiConstants.students.index(page), resolve);
      return true;
    }

    storeFilter(key, active, selected) {
      if (selected) {
        var options = {};
        if (selected !== 'None') {
          options.order = `${key} ${selected}`;
        }
        var resolve = (response) => this.storeStudents(response);
        Requester.get(ApiConstants.students.index(1, options), resolve);
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
