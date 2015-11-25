(() => {
  class ProfileActions {

    constructor() {
      this.generateActions(
        'storeProfile'
      );
    }

    fetchMe(profile) {
      if (profile.empty) {
        resolve = (response) => this.storeMe(response);
        Requester.get(ApiConstants.users.profile, resolve);
      }
      return true;
    }
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
