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
      var results = response['pg_search/documents'];
      results.map((result) => {
        if (result.searchable_type === 'school') {
          result.route = RouteConstants.schools.show(result.searchable_id);
        } else {
          result.route = RouteConstants.students.show(result.searchable_id);
        }
      });
      this.results = results;
    }

    storeSearch(search) {
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
