(() => {
  class SchoolStore {

    constructor() {
      this.sidebar = true;
      this.school = {
        school: {},
      };
      this.bindListeners({
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
        handleToggleSidebar: SchoolActions.TOGGLE_SIDEBAR,
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
