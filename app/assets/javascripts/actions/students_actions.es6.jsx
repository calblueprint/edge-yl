(() => {
  class StudentsActions {

    constructor() {
      this.generateActions(
        'storeStudents',
        'toggleSidebar'
      );
    }

    fetchStudents(page) {
      var resolve = (response) => this.storeStudents(response);
      Requester.get(ApiConstants.students.index(page), resolve);
      return true;
    }

    storeFilter(key, active, selected) {
      if (selected) {
        var options = { order: 'ASC' };
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
