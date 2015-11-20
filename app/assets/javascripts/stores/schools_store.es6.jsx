(() => {
  class SchoolsStore {

    constructor() {
      this.schools = [];
      this.sidebar = true;
      this.bindListeners({
        handleToggleSidebar: SchoolsActions.TOGGLE_SIDEBAR,
        handleStoreSchools: SchoolsActions.STORE_SCHOOLS,
      });
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }

    handleStoreSchools(response) {
      this.pagination = response.meta.pagination;
      this.schools = response.schools;
    }
  }
  this.SchoolsStore = alt.createStore(SchoolsStore);
})();
