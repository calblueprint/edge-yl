(() => {
  class ThreadsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'removeThread',
        'storeEmails',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    deleteThread(tid) {
      var resolve = (response) => {
        this.removeThread(response);
        ViewActions.storeToast(true, 'Thread deleted!');
      };
      Requester.delete(
        ApiConstants.emails.delete(tid),
        resolve,
      );
      return true;
    }

    fetchEmails(page) {
      var resolve = (response) => this.storeEmails(response);
      Requester.get(ApiConstants.emails.index(page), resolve);
      return true;
    }
  }
  this.ThreadsActions = alt.createActions(ThreadsActions);
})();
