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

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateStudent(student, template) {
      var id = template.id;
      delete template.id;
      Object.keys(template).map((key) => {
        if (typeof(template[key]) === 'object' ||
            student[key] === template[key]) {
          delete template[key];
        }
      });
      var params = { student: template };
      var resolve = (response) => this.storeStudent(response);
      Requester.update(ApiConstants.students.update(id), params, resolve);
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
