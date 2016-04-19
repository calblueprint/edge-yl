(() => {
  class ProfileActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeProfile',
        'storeTemplate',
        'storeValue',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    /**
     * This handles the special case of a single message sent as an error
     * because it cannot be tied to an object.
     */
    storeError(response) {
      if (response.errors) {
        return response;
      } else if (response.message) {
        return { errors: { current_password: ['Incorrect Password!'] } };
      }
      return true;
    }

    storePairing(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        type: options.type,
        value: options.value,
      };
    }

    updatePassword(template) {
      var params = { password: template.attributes };
      var resolve = (response) => {
        this.closeOverlay();
        ViewActions.storeToast(true, 'Password changed!');
      }
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.users.updatePassword(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateProfile(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var params = { profile: attributes };
      var resolve = (response) => {
        this.storeProfile(response);
        ViewActions.storeToast(true, 'Profile updated!');
      };
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.profiles.update(pairing.id),
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
  }
  this.ProfileActions = alt.createActions(ProfileActions);
})();
