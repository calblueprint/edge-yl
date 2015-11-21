(() => {
  class HeaderStore {

    constructor() {
      this.query = '';
      this.bindListeners({
        storeQuery: SchoolActions.STORE_QUERY,
      });
    }

    storeQuery(response) {
      this.query = response.query;
    }
  }
  this.SchoolStore = alt.createStore(HeaderStore);
})();
