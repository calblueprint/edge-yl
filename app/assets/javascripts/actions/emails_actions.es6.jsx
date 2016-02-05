(() => {
  class EmailsActions {

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
    fetchEmails() {
      var resolve = (response) => this.storeEmails(response);
      Requester.get(ApiConstants.emails.index, resolve);
      return true;
    }
  }
  this.EmailsActions = alt.createActions(EmailsActions);
})();
