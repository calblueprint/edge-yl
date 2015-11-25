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
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
