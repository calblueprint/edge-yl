(() => {
  class ProfileStore {

    constructor() {
      this.profile = null;
      this.template = {
        errors: {},
      };
      this.bindListeners({
        handleStoreAttribute: ProfileActions.STORE_ATTRIBUTE,
        handleStoreError: ProfileActions.STORE_ERROR,
        handleStoreProfile: ProfileActions.STORE_PROFILE,
      });
    }

    handleStoreAttribute(attribute) {
      this.template[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreProfile(response) {
      this.profile = response.user;
      this.template = Object.assign({}, this.profile);
      this.template.errors = {};
    }
  }
  this.ProfileStore = alt.createStore(ProfileStore);
})();
