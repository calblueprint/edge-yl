(() => {
  class HeaderActions {

    constructor() {
      this.generateActions(
        'storeResults'
      );
    }

    storeSearch(active, query) {
      var resolve = (response) => this.storeResults(response);
      //TODO make a request - Requester.get()
      return { active: active, query: query };
    }
  }
  this.HeaderActions = alt.createActions(HeaderActions);
})();
