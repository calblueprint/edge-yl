(() => {
  class HeaderStore {

    constructor() {
      this.results =[];
      this.search = {
        active: false,
        query: '',
      };
      this.bindListeners({
        storeResults: HeaderActions.STORE_RESULTS,
        storeSearch: HeaderActions.STORE_SEARCH,
      });
    }

    storeResults(response) {
      console.log(response);
    }

    storeSearch(search) {
      if (search.query === undefined) {
        search.query = this.search.query;
      }
      this.search = search;
    }
  }
  this.HeaderStore = alt.createStore(HeaderStore);
})();
