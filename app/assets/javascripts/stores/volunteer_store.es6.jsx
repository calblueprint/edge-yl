(() => {
  class VolunteerStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overlay = false;
      this.volunteer = {
        leadership: {},
      };
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: VolunteerActions.CLOSE_OVERLAY,
        handleStoreAttribute: VolunteerActions.STORE_ATTRIBUTE,
        handleStoreError: VolunteerActions.STORE_ERROR,
        handleStoreTemplate: VolunteerActions.STORE_TEMPLATE,
        handleStoreVolunteer: VolunteerActions.STORE_VOLUNTEER,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }

    handleStoreVolunteer(response) {
      this.overlay = false;
      this.volunteer = response.volunteer;
    }
  }
  this.VolunteerStore = alt.createStore(VolunteerStore);
})();
