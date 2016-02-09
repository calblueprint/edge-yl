(() => {
  class HeaderStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
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

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreResults(response) {
      this.pagination = response.meta.pagination;
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
