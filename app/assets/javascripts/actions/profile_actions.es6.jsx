(() => {
  class ProfileActions {

    constructor() {
      this.generateActions(
        'storeProfile'
      );
    }

    fetchProfile() {
      var resolve = (response) => this.storeProfile(response);
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
      var resolve = (response) => this.storeProfile(response);
      Requester.update(ApiConstants.users.update(id), params, resolve);
      return true;
    }

    toggleSidebar(id, status) {
      var resolve = (response) => this.storeProfile(response);
      params = {'has_sidebar': status};
      Requester.update(ApiConstants.users.update(id), params, resolve);
      return true;
    }
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
