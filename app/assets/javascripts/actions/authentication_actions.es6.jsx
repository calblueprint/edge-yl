(() => {
  class AuthenticationActions {

    constructor() {
      this.generateActions(
        'storeError',
        'storeSession'
      );
    }

    createSession(template) {
      var params = { user: template };
      var resolve = (response) => this.storeSession(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.users.login,
        params,
        resolve,
        reject
      );
      return true;
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }
  }
  this.AuthenticationActions = alt.createActions(AuthenticationActions);
})();
