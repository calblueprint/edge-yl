(() => {
  class HeaderStore {

    constructor() {
      this.dropdown = false;
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
        handleToggleDropdown: HeaderActions.TOGGLE_DROPDOWN,
      });
    }

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

    handleToggleDropdown() {
      this.dropdown = !this.dropdown;
    }
  }
  this.HeaderStore = alt.createStore(HeaderStore);
})();
