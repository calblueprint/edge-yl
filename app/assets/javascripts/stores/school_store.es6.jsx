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
      });
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreSchool(response) {
      this.overlay.active = false;
      this.school = response.school;
    }
  }
  this.SchoolStore = alt.createStore(SchoolStore);
})();
