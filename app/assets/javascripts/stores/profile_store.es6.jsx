(() => {
  class ProfileStore {

    constructor() {
      this.profile = {};
      this.bindListeners({
        handleStoreProfile: ProfileActions.STORE_PROFILE,
      });
    }

    handleStoreProfile(response) {
      this.profile = response.user;
    }
  }
  this.ProfileStore = alt.createStore(ProfileStore);
})();
