(() => {
  class HeaderStore {

    constructor() {
      this.results = [];
      this.search = {
        active: false,
        query: '',
      };
      this.bindListeners({
        handleStoreResults: HeaderActions.STORE_RESULTS,
        handleStoreSearch: HeaderActions.STORE_SEARCH,
      });
    }

    handleStoreResults(response) {
      this.results = response.searchables;
    }

    handleStoreSearch(search) {
      if (search.query === undefined) {
        search.query = this.search.query;
      } else if (search.query === '') {
        search.active = false;
      }
      this.search = search;
    }
  }
  this.HeaderStore = alt.createStore(HeaderStore);
})();
