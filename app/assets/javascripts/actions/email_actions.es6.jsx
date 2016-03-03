(() => {
  class EmailActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeEmail',
        'storeError',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createReply(email, tid) {
      var attributes = {
        email_thread_id: tid,
        recipient: email.sender,
        sender: email.recipient,
        subject: "Re: " + email.subject,
      };
      var params = { email: attributes };
      var resolve = (response) => {
        window.location = RouteConstants.drafts.show(response.email.id);
      };
      Requester.post(
        ApiConstants.drafts.create,
        params,
        resolve,
      );
      return true;
    }

    fetchEmail(id) {
      var resolve = (response) => this.storeEmail(response);
      Requester.get(ApiConstants.emails.show(id), resolve);
      return true;
    }
  }
  this.EmailActions = alt.createActions(EmailActions);
})();
