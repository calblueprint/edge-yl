(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'updateStudent'
      );
    }

    fetchStudent(id) {
      resolve = (response) => this.updateStudent(response);
      Requester.get(ApiConstants.students.show(id), resolve);
      return true;
    }

    toggleSidebar(sidebar) {
      return sidebar;
    }

    changeStudent(id, params) {
      resolve = (response) => this.updateStudent(response);
      Requester.update(ApiConstants.students.update(id), params, resolve);
      return true;
    }

    updateOverlay(active, type) {
      return {
        active: active,
        type: type,
      };
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
