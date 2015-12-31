(() => {
  class AuthenticationStore {

    constructor() {
      this.template = {
        errors: {},
      };
      this.bindListeners({
        handleStoreAttribute: AuthenticationActions.STORE_ATTRIBUTE,
        handleStoreError: AuthenticationActions.STORE_ERROR,
        handleStoreSession: AuthenticationActions.STORE_SESSION,
      });
    }

    handleStoreAttribute(attribute) {
      this.template[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreSession(response) {
      window.location = RouteConstants.students.index();
    }
  }
  this.AuthenticationStore = alt.createStore(AuthenticationStore);
})();
