(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'storeAttribute',
        'storeComment',
        'storeError',
        'storeStudent',
        'toggleEditability'
      );
    }

    createComment(params) {
      var resolve = (response) => this.storeComment(response);
      Requester.post(
        ApiConstants.comments.create,
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

    storeTemplate(active, type, key, value, options) {
      return {
        active: active,
        errors: {},
        key: key ? key : '',
        options: options ? options: [],
        type: type,
        value: value ? value : '',
      };
    }

    updateStudent(id, template) {
      var attributes = {};
      attributes[template.key] = template.value;
      var params = { student: attributes };
      var resolve = (response) => this.storeStudent(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.students.update(id),
        params,
        resolve,
        reject
      );
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
