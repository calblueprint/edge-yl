(() => {
  class ImportStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = null;
      this.bindListeners({
        handleStoreConference: ImportActions.STORE_CONFERENCE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreConference(conference) {
      this.conference = conference;
    }
  }
  this.ImportStore = alt.createStore(ImportStore);
})();
