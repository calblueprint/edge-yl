(() => {
  class SchoolActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeComment',
        'storeError',
        'storeSchool',
        'storeValue',
      );
    }

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

    fetchSchool(id) {
      var resolve = (response) => this.storeSchool(response);
      Requester.get(ApiConstants.schools.show(id), resolve);
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

    updateSchool(template, attributes={}) {
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

