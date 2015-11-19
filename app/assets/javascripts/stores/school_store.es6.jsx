(() => {
  class SchoolStore {

    constructor() {
      this.sidebar = true;
      this.School = {
        school: {},
      };
      this.bindListeners({
        handleToggleSidebar: SchoolActions.TOGGLE_SIDEBAR,
        handleStoreSchool: SchoolActions.STORE_School,
      });
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }

    handleStoreSchool(School) {
      this.School = School;
    }
  }
  this.SchoolStore = alt.createStore(SchoolStore);
})();
