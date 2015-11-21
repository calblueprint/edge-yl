(() => {
  class HeaderActions {

    constructor() {
      this.generateActions(
        'storeResults'
      );
    }

    storeQuery(query) {
        var resolve = (response) => this.storeResults(response);
        //Requester.get()
        return query;
    }
  }
  this.HeaderActions = alt.createActions(HeaderActions);
})();
