(() => {
  class DraftsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeDrafts',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchDrafts() {
      var resolve = (response) => this.storeDrafts(response);
      Requester.get(ApiConstants.drafts.index, resolve);
      return true;
    }
  }
  this.DraftsActions = alt.createActions(DraftsActions);
})();
