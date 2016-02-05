(() => {
  class SchoolsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.schools = [];
      this.bindListeners({
        handleStoreSchools: SchoolsActions.STORE_SCHOOLS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreSchools(response) {
      this.pagination = response.meta.pagination;
      this.schools = response.schools;
    }
  }
  this.SchoolsStore = alt.createStore(SchoolsStore);
})();
