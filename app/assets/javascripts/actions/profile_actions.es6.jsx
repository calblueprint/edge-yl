(() => {
  class ProfileActions {

    constructor() {
      this.generateActions(
        'storeError',
        'storeProfile',
      );
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    toggleSidebar(id, status) {
      var attributes = { has_sidebar: status };
      var params = { profile: attributes };
      var resolve = (response) => this.storeProfile(response);
      Requester.update(
        ApiConstants.profiles.update(id),
        params,
        resolve,
      );
      return true;
    }

    updateProfile(profile, template) {
      var id = profile.id;
      var attributes = Object.assign({}, template);
      Object.keys(attributes).map((key) => {
        if (typeof(attributes[key]) === 'object' ||
          profile[key] === attributes[key]) {
          delete attributes[key];
        }
      });
      if (attributes.errors) {
        delete attributes.errors;
      }
      var params = { user: attributes };
      var resolve = (response) => this.storeProfile(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.users.update(id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
