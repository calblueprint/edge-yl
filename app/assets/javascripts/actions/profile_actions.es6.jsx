(() => {
  class ProfileActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeError',
        'storeProfile',
      );
    }

    storeTemplate(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }

    toggleSidebar(profile) {
      var attributes = { has_sidebar: !profile.has_sidebar };
      var params = { profile: attributes };
      var resolve = (response) => this.storeProfile(response);
      Requester.update(
        ApiConstants.profiles.update(profile.id),
        params,
        resolve,
      );
      return true;
    }

    updateProfile(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { user: attributes };
      var resolve = (response) => this.storeProfile(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.users.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
