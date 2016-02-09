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
      var resolve = (response) => {
        // TODO put real smtp code in SMTP.send(template.email).
      };
      var reject = (response) => this.storeErrors(response);
      Requester.post(
        ApiConstants.drafts.update,
        params,
        resolve,
        reject,
      );
      return true;
    }

    storeAttribute(key, value, id) {
      // Fire a request to save the draft on the server.
      var attributes = { id: id };
      attributes[key] = value;
      var params = { email: attributes };
      var reject = (response) => this.storeErrors(response);
      var resolve =  (response) => this.storeDraft(response);
      Requester.update(
        ApiConstants.drafts.update(id),
        params,
        resolve,
        reject,
      );
    }
  }
  this.DraftActions = alt.createActions(DraftActions);
})();
