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
      var resolve = (response) => this.storeComment(response);
      Requester.post(ApiConstants.students.comments.create(id), params, resolve);
      return true;
    }

    fetchStudent(id) {
      var resolve = (response) => this.storeStudent(response);
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

    storeTemplate(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    updateStudent(template) {
      var id = template.id;
      delete template.id;
      var params = { student: template };
      var resolve = (response) => this.storeStudent(response);
      Requester.update(ApiConstants.students.update(id), params, resolve);
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
