(() => {
  class DraftActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'initializeDraft',
        'storeDraft',
        'storeErrors',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchDraft(id) {
      var resolve = (response) => this.initializeDraft(response);
      Requester.get(ApiConstants.drafts.show(id), resolve);
      return true;
    }

    sendEmail(template) {
      var params = { email: template.attributes };
      var resolve = (response) => {
        window.location = RouteConstants.threads.index(1, true);
      };
      var reject = (response) => this.storeErrors(response);
      Requester.update(
        ApiConstants.drafts.send(params.email.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateDraft(id, params, resolve, reject) {
      if (!resolve) {
        resolve = (response) => this.storeDraft(response);
      }
      if (!reject) {
        reject = (response) => this.storeErrors(response);
      }
      Requester.update(
        ApiConstants.drafts.update(id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeAttribute(key, value, id) {
      var attributes = {};
      attributes[key] = value;
      var params = { email: attributes };
      var state = DraftStore.getState();
      var attributes = state.template.attributes;
      var draft = state.draft;
      if (Math.abs(attributes.content.length - draft.content.length) > 10) {
        this.updateDraft(id, params);
      }
      return {
        key: key,
        value: value,
      };
    }
  }
  this.DraftActions = alt.createActions(DraftActions);
})();
