(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'storeStudent'
      );
    }

    fetchStudent(id) {
      resolve = (response) => this.storeStudent(response);
      Requester.get(ApiConstants.students.show(id), resolve);
      return true;
    }

    storeOverlay(active, type) {
      return {
        active: active,
        type: type,
      };
    }

    toggleSidebar(sidebar) {
      return sidebar;
    }



    updateStudent(id, params) {
      resolve = (response) => this.storeStudent(response);
      Requester.update(ApiConstants.students.update(id), params, resolve);
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
