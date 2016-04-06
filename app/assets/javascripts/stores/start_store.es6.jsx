(() => {
  class StartStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = null;
      this.errors = false;
      this.bindListeners({
        handleStoreConference: StartActions.STORE_CONFERENCE,
        handleStoreErrors: StartActions.STORE_ERRORS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreConference(conference) {
      this.conference = conference;
    }

    handleStoreErrors() {
      this.errors = true;
      console.log(this.errors);
    }
  }
  this.StartStore = alt.createStore(StartStore);
})();
