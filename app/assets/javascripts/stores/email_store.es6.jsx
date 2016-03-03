(() => {
  class EmailStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.thread = {
        emails: []
      };
      this.template = {};
      this.bindListeners({
        handleStoreEmail: EmailActions.STORE_EMAIL,
        handleStoreError: EmailActions.STORE_ERROR,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreEmail(response) {
      this.thread = response.email_thread;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }
  }
  this.EmailStore = alt.createStore(EmailStore);
})();
