(() => {
  class DraftsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.drafts = [];
      this.bindListeners({
        handleStoreDrafts: DraftsActions.STORE_DRAFTS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreDrafts(response) {
      this.drafts = response.drafts;
    }
  }
  this.DraftsStore = alt.createStore(DraftsStore);
})();
