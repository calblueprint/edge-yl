(() => {
  class StartStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = null;
      this.bindListeners({
        handleStoreConference: StartActions.STORE_CONFERENCE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreConference(conference) {
      this.conference = conference;
    }
  }
  this.StartStore = alt.createStore(StartStore);
})();
