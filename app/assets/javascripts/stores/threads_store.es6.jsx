(() => {
  class ThreadsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.threads = [];
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.bindListeners({
        handleRemoveThread: ThreadsActions.REMOVE_THREAD,
        handleStoreEmails: ThreadsActions.STORE_EMAILS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleRemoveThread(response) {
      this.threads = this.threads.filter((d) => {
        return d.id != response.email_thread.id;
      });
    }

    handleStoreEmails(response) {
      this.threads = response.emails;
      this.pagination = response.meta.pagination;
    }
  }
  this.ThreadsStore = alt.createStore(ThreadsStore);
})();
