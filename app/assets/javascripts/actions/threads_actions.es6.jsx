(() => {
  class ThreadsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'removeThread',
        'storeThreads',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    deleteThread(tid) {
      var resolve = (response) => {
        this.removeThread(response);
        ViewActions.storeToast(true, 'Thread deleted!');
      };

      var confirmation = confirm('Are you sure you want to delete this thread?' +
                                'This action cannot be undone.');
      if(confirmation) {
        Requester.delete(
          ApiConstants.threads.delete(tid),
          resolve,
        );
      }
      return true;
    }

    fetchThreads(page) {
      var resolve = (response) => this.storeThreads(response);
      Requester.get(ApiConstants.threads.index(page), resolve);
      return true;
    }
  }
  this.ThreadsActions = alt.createActions(ThreadsActions);
})();
