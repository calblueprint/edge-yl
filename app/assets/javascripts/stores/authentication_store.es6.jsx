(() => {
  class AuthenticationStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.template = {
        attributes: {},
        errors: {},
        message: '',
      };
      this.bindListeners({
        handleStoreAttribute: AuthenticationActions.STORE_ATTRIBUTE,
        handleStoreError: AuthenticationActions.STORE_ERROR,
        handleStoreMessage: AuthenticationActions.STORE_MESSAGE,
        handleStoreSession: AuthenticationActions.STORE_SESSION,
        handleStoreUser: AuthenticationActions.STORE_USER,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreMessage(response) {
      this.template.message = response.message;
    }

    handleStoreSession(response) {
      window.location = RouteConstants.students.index();
    }

    handleStoreUser(response) {
      window.location = RouteConstants.students.index();
    }
  }
  this.AuthenticationStore = alt.createStore(AuthenticationStore);
})();
