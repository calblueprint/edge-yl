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
    fetchEmail(id) {
      var resolve = (response) => this.storeEmail(response);
      Requester.get(ApiConstants.emails.show(id), resolve);
      return true;
    }
  }
  this.EmailActions = alt.createActions(EmailActions);
})();
