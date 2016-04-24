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
    createReply(email, tid, sender) {
      var attributes = {
        email_thread_id: tid,
        recipient: email.sender,
        sender: sender,
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

    deleteThread(id) {
      var resolve = (response) => {
        window.location = RouteConstants.threads.index();
      };
      Requester.delete(
        ApiConstants.threads.delete(id),
        resolve,
      );
      return true;
    }

    fetchThread(id) {
      var resolve = (response) => this.storeThread(response);
      Requester.get(ApiConstants.threads.show(id), resolve);
      return true;
    }
  }
  this.ThreadActions = alt.createActions(ThreadActions);
})();
