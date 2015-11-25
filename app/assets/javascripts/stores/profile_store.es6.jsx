(() => {
  class ProfileStore {

    constructor() {
      this.profile = { empty: true };
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
