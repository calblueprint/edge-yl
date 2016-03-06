(() => {
  class ThreadsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeEmails',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchEmails(page) {
      var resolve = (response) => this.storeEmails(response);
      Requester.get(ApiConstants.emails.index(page), resolve);
      return true;
    }
  }
  this.ThreadsActions = alt.createActions(ThreadsActions);
})();
