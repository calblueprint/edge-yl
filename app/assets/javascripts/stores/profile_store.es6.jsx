(() => {
  class ProfileStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overlay = false;
      this.pairing = {};
      this.profile = null;
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: ProfileActions.CLOSE_OVERLAY,
        handleStoreAttribute: ProfileActions.STORE_ATTRIBUTE,
        handleStoreError: ProfileActions.STORE_ERROR,
        handleStorePairing: ProfileActions.STORE_PAIRING,
        handleStoreProfile: ProfileActions.STORE_PROFILE,
        handleStoreTemplate: ProfileActions.STORE_TEMPLATE,
        handleStoreValue: ProfileActions.STORE_VALUE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.template = {};
      this.pairing = {}
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      if (response.errors) {
        this.template.errors = response.errors;
      }
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.template = {};
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.pairing = {}
      this.template = template;
    }

    handleStoreProfile(response) {
      this.overlay = false;
      this.profile = response.user;
    }

    handleStoreValue(value) {
      this.pairing.value = value;
    }
  }
  this.ProfileStore = alt.createStore(ProfileStore);
})();
