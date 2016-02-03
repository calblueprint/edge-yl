(() => {
  class EmailStore {

    constructor() {
      this.email = {};
      this.template = {};
      this.bindListeners({
        handleStoreEmail: EmailActions.STORE_EMAIL,
        handleStoreError: EmailActions.STORE_ERROR,
      });
    }

    handleStoreEmail(response) {
      this.email = response.email;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }
  }
  this.EmailStore = alt.createStore(EmailStore);
})();
