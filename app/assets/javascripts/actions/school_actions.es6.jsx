(() => {
  class SchoolActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeComment',
        'storeError',
        'storeSchool',
        'toggleEditability',
      );
    }

    createComment(params) {
      var resolve = (response) => this.storeComment(response);
      Requester.post(
        ApiConstants.comments.create,
        params,
        resolve,
      );
      return true;
    }

    fetchSchool(id) {
      var resolve = (response) => this.storeSchool(response);
      Requester.get(ApiConstants.schools.show(id), resolve);
      return true;
    }

    storeTemplate(options) {
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

    updateSchool(template) {
      var attributes = {};
      attributes[template.key] = template.value;
      var params = { school: attributes };
      var resolve = (response) => this.storeSchool(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.schools.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.SchoolActions = alt.createActions(SchoolActions);
})();

