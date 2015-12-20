(() => {
  class ProfileStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.profile = {
        has_sidebar: true,
        visits: [],
      };
      this.template = {
        errors: {},
      };
      this.bindListeners({
        handleStoreAttribute: ProfileActions.STORE_ATTRIBUTE,
        handleStoreError: ProfileActions.STORE_ERROR,
        handleStoreOverlay: ProfileActions.STORE_OVERLAY,
        handleStoreProfile: ProfileActions.STORE_PROFILE,
      });
    }

    handleStoreAttribute(attribute) {
      this.template[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreProfile(response) {
      this.overlay.active = false;
      this.profile = response.user;
      this.template = Object.assign({}, this.profile);
      this.template.errors = {};
    }
  }
  this.ProfileStore = alt.createStore(ProfileStore);
})();
