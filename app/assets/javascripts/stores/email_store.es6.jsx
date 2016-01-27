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

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreEmail(response) {
      this.email = response.email;
    }

  }
  this.EmailStore = alt.createStore(EmailStore);
})();
