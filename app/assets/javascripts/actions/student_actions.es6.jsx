(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'storeComment',
        'storeStudent',
        'toggleSidebar'
      );
    }

    createComment(id, params) {
      resolve = (response) => this.storeComment(response);
      Requester.post(ApiConstants.students.comments.create(id), params, resolve);
      return true;
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
