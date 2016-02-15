(() => {
  class DraftActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeDraft',
        'storeErrors',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchDraft(id) {
      var resolve = (response) => this.storeDraft(response);
      Requester.get(ApiConstants.drafts.show(id), resolve);
      return true;
    }

    sendEmail(template) {
      var params = { email: template.attributes };
      params.email['is_draft'] = false;
      var resolve = (response) => {
        window.location = RouteConstants.emails.index;
      };
      var reject = (response) => this.storeErrors(response);
      this.updateDraft(params.email.id, params, resolve, reject);
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
