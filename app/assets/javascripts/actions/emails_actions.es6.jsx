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
    fetchEmails(page) {
      var resolve = (response) => this.storeEmails(response);
      Requester.get(ApiConstants.emails.index(page), resolve);
      return true;
    }
  }
  this.EmailsActions = alt.createActions(EmailsActions);
})();
