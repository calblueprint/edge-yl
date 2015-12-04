(() => {
  class ProfileStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = false;
      this.profile = {
        profile: {},
        visits: [],
      };
      this.bindListeners({
        handleStoreProfile: ProfileActions.STORE_PROFILE,
        handleStoreOverlay: ProfileActions.STORE_OVERLAY,
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
