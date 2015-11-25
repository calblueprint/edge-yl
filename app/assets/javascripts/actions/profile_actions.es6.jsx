(() => {
  class ProfileActions {

    constructor() {
      this.generateActions(
        'storeProfile'
      );
    }

    fetchProfile(profile) {
      if (profile.empty) {
        resolve = (response) => this.storeProfile(response);
        Requester.get(ApiConstants.users.profile, resolve);
      }
      return true;
    }
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
