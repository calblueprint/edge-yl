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
        handleStoreOverlay: ProfileActions.STORE_OVERLAY,
        handleStoreProfile: ProfileActions.STORE_PROFILE,
      });
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreProfile(response) {
      this.profile = response.user;
    }
  }
  this.ProfileStore = alt.createStore(ProfileStore);
})();
