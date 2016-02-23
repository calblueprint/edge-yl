(() => {
  class ProfileActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeError',
        'storeProfile',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    updateProfile(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { profile: attributes };
      var resolve = (response) => this.storeProfile(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.profiles.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateSidebar(profile) {
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


    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
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
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
