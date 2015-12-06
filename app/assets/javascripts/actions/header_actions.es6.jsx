(() => {
  class HeaderActions {

    constructor() {
      this.generateActions(
        'storeResults',
        'toggleDropdown'
      );
    }

    storeSearch(active, query) {
      if (query) {
        var resolve = (response) => this.storeResults(response);
        Requester.get(ApiConstants.searchables.search(query), resolve);
      }
      return { active: active, query: query };
    }
  }
  this.HeaderActions = alt.createActions(HeaderActions);
})();
