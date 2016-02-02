(() => {
  class ComposeActions {

    constructor() {
      this.generateActions(
        'storeEmail',
        'storeErrors',
      );
    }

    fetchEmail(id) {
      var resolve = (response) => this.storeEmail(response);
      Requester.get(ApiConstants.emails.show(id), resolve);
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
        ApiConstants.emails.update,
        params,
        resolve,
        reject,
      );
      return true;
    }

  }
  this.ComposeActions = alt.createActions(ComposeActions);
})();
