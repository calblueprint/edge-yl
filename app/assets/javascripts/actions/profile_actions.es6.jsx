(() => {
  class ProfileActions {

    constructor() {
      this.generateActions(
        'storeError',
        'storeProfile'
      );
    }

    fetchProfile() {
      var resolve = (response) => this.storeProfile(response);
      Requester.get(ApiConstants.users.profile, resolve);
      return true;
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    toggleSidebar(id, status) {
      var resolve = (response) => this.storeProfile(response);
      var params = {};
      params.user = { has_sidebar: status };
      Requester.update(ApiConstants.users.update(id), params, resolve);
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
      Requester.update(ApiConstants.users.update(id), params, resolve);
      return true;
    }
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
