(() => {
  class EmailsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.emails = [];
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.bindListeners({
        handleStoreEmails: EmailsActions.STORE_EMAILS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreEmails(response) {
      this.emails = response.emails;
      this.pagination = response.meta.pagination;
    }
  }
  this.EmailsStore = alt.createStore(EmailsStore);
})();
