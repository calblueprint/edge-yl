(() => {
  class DraftStore {

    constructor() {
      this.draft = {};
      this.template = {
        errors: {},
      };
      this.bindListeners({
        handleStoreDraft: DraftActions.STORE_DRAFT,
        handleStoreErrors: DraftActions.STORE_ERRORS,
      });
    }

    handleStoreDraft(response) {
      this.draft = response.draft;
    }

    handleStoreErrors(response) {
      this.template.errors = response.errors;
    }
  }
  this.DraftStore = alt.createStore(DraftStore);
})();
