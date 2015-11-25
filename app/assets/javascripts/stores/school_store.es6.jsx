(() => {
  class SchoolStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = true;
      this.school = {
        school: {},
      };
      this.bindListeners({
        handleStoreOverlay: SchoolActions.STORE_OVERLAY,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
        handleToggleSidebar: SchoolActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreSchool(response) {
      console.log('handlestoreschool');
      this.overlay.active = false;
      this.school = response.school;
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }
  }
  this.SchoolStore = alt.createStore(SchoolStore);
})();
