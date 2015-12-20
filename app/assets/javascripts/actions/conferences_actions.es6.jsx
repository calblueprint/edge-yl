(() => {
  class ConferencesActions {

    constructor() {
      this.generateActions(
        'storeConferences',
        'storeError'
      );
    }

    createConference(template) {
      var attributes = Object.assign({}, template);
      if (attributes.errors) {
        delete attributes.errors;
      }
      var params = { conference: attributes };
      var resolve = (response) => console.log('success');
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.conferences.create,
        params,
        resolve,
        reject
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

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }
  }
  this.ConferencesActions = alt.createActions(ConferencesActions);
})();
