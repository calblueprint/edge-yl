(() => {
  class EmailsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.emails = [];
      this.bindListeners({
        handleStoreEmails: EmailsActions.STORE_EMAILS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreEmails(response) {
      this.emails = response.emails;
    }
  }
  this.EmailsStore = alt.createStore(EmailsStore);
})();
