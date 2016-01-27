(() => {
  class ConferencesActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeConference',
        'storeConferences',
        'storeError',
      );
    }

    createConference(template) {
      var params = { conference: template.attributes };
      var resolve = (response) => this.storeConference(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.conferences.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchConferences(page) {
      var resolve = (response) => this.storeConferences(response);
      Requester.get(ApiConstants.conferences.index(page), resolve);
      return true;
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
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
  this.ConferencesActions = alt.createActions(ConferencesActions);
})();
