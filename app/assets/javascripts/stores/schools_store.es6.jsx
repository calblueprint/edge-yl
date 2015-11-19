(() => {
  class SchoolsStore {

    constructor() {
      this.sidebar = true;
      this.schools = [];
      this.bindListeners({
        handleToggleSidebar: SchoolsActions.TOGGLE_SIDEBAR,
        handleUpdateSchools: SchoolsActions.UPDATE_SCHOOLS,
      });
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }

    handleUpdateSchools(schools) {
      this.schools = schools;
    }
  }
  this.SchoolsStore = alt.createStore(SchoolsStore);
})();
