(() => {
  class DraftActions {

    constructor() {
      this.generateActions(
        'storeDraft',
        'storeErrors',
      );
    }

    fetchDraft(id) {
      var resolve = (response) => this.storeDraft(response);
      Requester.get(ApiConstants.drafts.show(id), resolve);
      return true;
    }

    sendEmail(template) {
      var resolve = (response) => {
      // TODO put real smtp code in
      // SMTP.send(template.email);
      };
      var params = { email: template.attributes };
      var reject = (response) => { this.storeErrors(response); }
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
      var reject = (response) => { this.storeErrors(response); };
      var resolve =  (response) => { this.storeDraft(response) };
      Requester.update(
        ApiConstants.drafts.update(id),
        params,
        resolve,
        reject,
      );
      return {
        key: key,
        value: value,
      };
    }

  }
  this.DraftActions = alt.createActions(DraftActions);
})();
