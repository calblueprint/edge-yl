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
        handleStoreThreads: ThreadsActions.STORE_THREADS,
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

    handleStoreThreads(response) {
      this.threads = response.threads;
      this.pagination = response.meta.pagination;
    }
  }
  this.ThreadsStore = alt.createStore(ThreadsStore);
})();
