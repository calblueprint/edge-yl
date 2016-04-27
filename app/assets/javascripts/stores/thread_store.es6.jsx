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
        handleRemoveDraft: ThreadActions.REMOVE_DRAFT,
        handleStoreError: ThreadActions.STORE_ERROR,
        handleStoreThread: ThreadActions.STORE_THREAD,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleRemoveDraft(response) {
      this.thread.emails = this.thread.emails.filter((email) => {
        return email.id != response.email.id;
      });
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreThread(response) {
      this.thread = response.email_thread;
    }

  }
  this.ThreadStore = alt.createStore(ThreadStore);
})();
