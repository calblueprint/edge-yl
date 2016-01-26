(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeComment',
        'storeError',
        'storeStudent',
        'storeValue',
      );
    }

    createComment(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { comment: attributes };
      var resolve = (response) => this.storeComment(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.comments.create,
        params,
        resolve,
        reject,
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

    storePairing(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }

    storeTemplate(type, attributes={}) {
      return {
        attributes: attributes,
        errors: {},
        type: type,
      }
    }

    updateStudent(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { student: attributes };
      var resolve = (response) => this.storeStudent(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.students.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
