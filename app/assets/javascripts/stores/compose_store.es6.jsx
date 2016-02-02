(() => {
  class ComposeStore {

    constructor() {
      this.template = {
        email: {},
        errors: {},
      };
      this.bindListeners({
        handleStoreEmail: ComposeActions.STORE_EMAIL,
        handleStoreErrors: ComposeActions.STORE_ERRORS,
      });
    }

    handleStoreEmail(response) {
      this.email = response.email;
    }

    handleStoreErrors(response) {
      this.template.errors = response.errors;
    }
  }
  this.ComposeStore = alt.createStore(ComposeStore);
})();
