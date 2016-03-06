(() => {
  class ThreadStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.thread = {
        emails: []
      };
      this.template = {};
      this.bindListeners({
        handleStoreError: ThreadActions.STORE_ERROR,
        handleStoreThread: ThreadActions.STORE_THREAD,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreThread(response) {
      this.thread = response.email_thread;
    }

  }
  this.ThreadStore = alt.createStore(ThreadStore);
})();
