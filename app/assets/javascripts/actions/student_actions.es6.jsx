(() => {
  class StudentActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeComment',
        'storeError',
        'storeStudent',
        'storeValue',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createComment(template) {
      var params = { comment: template.attributes };
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

    createDraft(student) {
      var attributes = {
        emailable_id: student.id,
        emailable_type: "Student",
      };
      var params = { email: attributes };
      var resolve = (response) => {
        var id = response.email.id;
        window.location = RouteConstants.drafts.show(id);
      };
      Requester.post(
        ApiConstants.drafts.create,
        params,
        resolve,
      );
      return true;
    }

    fetchStudent(id) {
      var resolve = (response) => this.storeStudent(response);
      Requester.get(ApiConstants.students.show(id), resolve);
      return true;
    }

    updateStudent(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var params = { student: attributes };
      var resolve = (response) => this.storeStudent(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.students.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
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
        type: options.type,
        value: options.value,
      };
    }

    storeTemplate(model, attributes={}) {
      return {
        attributes: attributes,
        errors: {},
        model: model,
      };
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
