(() => {
  class HeaderStore {

    constructor() {
      this.query = '';
      this.bindListeners({
        storeQuery: HeaderActions.STORE_QUERY,
      });
    }

    storeQuery(query) {
      this.query = query;
    }
  }
  this.HeaderStore = alt.createStore(HeaderStore);
})();
