(() => {
  class ThreadActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeError',
        'storeThread',
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

    fetchThread(id) {
      var resolve = (response) => this.storeThread(response);
      Requester.get(ApiConstants.emails.show(id), resolve);
      return true;
    }
  }
  this.ThreadActions = alt.createActions(ThreadActions);
})();
