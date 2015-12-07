(() => {
  class ProfileStore {

    constructor() {
      this.bindListeners({
        handleStoreOverlay: ProfileActions.STORE_OVERLAY,
        handleStoreProfile: ProfileActions.STORE_PROFILE,
      });
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.profile = {
        visits: [],
        has_sidebar: true,
      };
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
