(() => {
  class HeaderStore {

    constructor() {
      this.search = {
        active: false,
        query: '',
      };
      this.bindListeners({
        storeSearch: HeaderActions.STORE_SEARCH,
      });
    }

    storeSearch(search) {
      console.log(search);
      if (search.query === undefined) {
        search.query = this.search.query;
      }
      this.search = search;
    }
  }
  this.HeaderStore = alt.createStore(HeaderStore);
})();
