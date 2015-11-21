(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'storeStudent',
        'toggleSidebar'
      );
    }

    fetchStudent(id) {
      resolve = (response) => this.storeStudent(response);
      Requester.get(ApiConstants.students.show(id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateStudent(id, params) {
      resolve = (response) => this.storeStudent(response);
      Requester.update(ApiConstants.students.update(id), params, resolve);
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
