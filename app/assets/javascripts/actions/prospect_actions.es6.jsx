(() => {
  class ProspectActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeComment',
        'storeError',
        'storeProspect',
        'storeValue',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createComment(template) {
      var params = { comment: template.attributes };
      var resolve = (response) => {
        this.storeComment(response);
        ViewActions.storeToast(true, 'Comment created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.comments.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchProspect(id) {
      var resolve = (response) => this.storeProspect(response);
      Requester.get(ApiConstants.prospects.show(id), resolve);
      return true;
    }

    updateProspect(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { prospect: attributes };
      var resolve = (response) => {
        this.storeProspect(response);
        ViewActions.storeToast(true, 'Prospect updated!');
      };
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.prospects.update(template.id),
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
        model: options.model,
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
  this.ProspectActions = alt.createActions(ProspectActions);
})();

