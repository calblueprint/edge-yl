(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'storeComment',
        'storeError',
        'storeStudent'
      );
    }

    createComment(id, params) {
      var resolve = (response) => this.storeComment(response);
      Requester.post(
        ApiConstants.students.comments.create(id),
        params,
        resolve
      );
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
      var id = student.id;
      var attributes = Object.assign({}, template);
      Object.keys(attributes).map((key) => {
        if (typeof(attributes[key]) === 'object' ||
            student[key] === attributes[key]) {
          delete attributes[key];
        }
      });
      if (attributes.errors) {
        delete attributes.errors;
      }
      var params = { student: attributes };
      var resolve = (response) => this.storeStudent(response);
      var reject = (response) => this.storeError(response);
      Requester.update(ApiConstants.students.update(id), params, resolve, reject);
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
