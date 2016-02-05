(() => {
  class AuthenticationActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeError',
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
      var resolve = (response) => this.storeUser(response);
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
