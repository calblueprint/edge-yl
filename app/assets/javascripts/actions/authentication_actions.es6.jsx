(() => {
  class AuthenticationActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeMessage',
        'storeSession',
        'storeUser',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createSession(template) {
      var params = { user: template.attributes };
      var resolve = (response) => this.storeSession(response);
      var reject = (response) => this.storeMessage(response);
      Requester.post(
        ApiConstants.users.login,
        params,
        resolve,
        reject,
      );
      return true;
    }

    createUser(template) {
      var params = { registration: template.attributes };
      var resolve = (response) => {
        window.location = RouteConstants.pages.loginToast.confirmation;
      }
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.users.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    destroySession() {
      var resolve = (response) => window.location = RouteConstants.pages.login;
      Requester.delete(ApiConstants.users.logout, resolve);
      return true;
    }

    resetPassword(template) {
      var params = template.attributes;
      var resolve = (response) => {
        window.location = RouteConstants.pages.loginToast.reset;
      }
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.users.passwords.reset,
        params,
        resolve,
        reject,
      );
      return true;
    }

    sendResetEmail(template) {
      var params = template.attributes;
      var resolve = (response) => {
        window.location = RouteConstants.pages.loginToast.emailSent;
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.users.passwords.requestReset,
        params,
        resolve,
        reject,
      );
      return true;
    }

    /**
    * This handles the special case of a single message sent as an error
    * because it cannot be tied to an object.
    */
    storeError(response) {
      if (response.errors) {
        return response;
      } else if (response.message) {
        return { errors: { email: [response.message] } };
      }
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }
  }
  this.AuthenticationActions = alt.createActions(AuthenticationActions);
})();
