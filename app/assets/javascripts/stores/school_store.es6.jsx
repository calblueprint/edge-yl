(() => {
  class SchoolStore {

    constructor() {
      this.sidebar = true;
      this.school = {
        school: {},
      };
      this.bindListeners({
        handleToggleSidebar: SchoolActions.TOGGLE_SIDEBAR,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
      });
    }

    handleStoreSchool(response) {
      this.school = response.school;
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }
  }
  this.SchoolStore = alt.createStore(SchoolStore);
})();
