(() => {
  class HeaderActions {

    constructor() {
      this.generateActions(
        'storeResults'
      );
    }

    storeQuery(query) {
        var resolve = (response) => this.storeResults(response);
        //TODO make a request - Requester.get()
        return query;
    }
  }
  this.HeaderActions = alt.createActions(HeaderActions);
})();
