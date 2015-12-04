(() => {
  class ProfileActions {

    constructor() {
      this.generateActions(
        'storeProfile'
      );
    }

    fetchProfile() {
      resolve = (response) => this.storeProfile(response);
      Requester.get(ApiConstants.users.profile, resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateProfile(id, params) {
      resolve = (response) => this.storeProfile(response);
      Requester.update(ApiConstants.profile.update(id), params, resolve);
      return true;
    }
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
