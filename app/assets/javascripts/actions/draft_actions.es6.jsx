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

    saveDraft(value) {
      // TODO save draft as people write.
    }

    sendEmail(template) {
      var resolve = (response) => {
      // TODO put real smtp code in
      // SMTP.send(template.email);
        console.log("Email sent successfully!");
      };
      var reject = (response) => { this.storeErrors(response); }
      Requester.post(
        ApiConstants.drafts.update,
        params,
        resolve,
        reject,
      );
      return true;
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

  }
  this.DraftActions = alt.createActions(DraftActions);
})();
