(() => {
  class SchoolsStore {

    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.schools = [];
      this.sidebar = true;
      this.bindListeners({
        handleStoreSchools: SchoolsActions.STORE_SCHOOLS,
      });
    }

    handleStoreSchools(response) {
      this.pagination = response.meta.pagination;
      this.schools = response.schools;
    }
  }
  this.SchoolsStore = alt.createStore(SchoolsStore);
})();
