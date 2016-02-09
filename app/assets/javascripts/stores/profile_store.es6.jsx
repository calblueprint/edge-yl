(() => {
  class ProfileStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overlay = false;
      this.profile = null;
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: ProfileActions.CLOSE_OVERLAY,
        handleStoreAttribute: ProfileActions.STORE_ATTRIBUTE,
        handleStoreError: ProfileActions.STORE_ERROR,
        handleStoreProfile: ProfileActions.STORE_PROFILE,
        handleStoreTemplate: ProfileActions.STORE_TEMPLATE,
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

    handleStoreProfile(response) {
      this.overlay = false;
      this.profile = response.user;
    }
  }
  this.ProfileStore = alt.createStore(ProfileStore);
})();
