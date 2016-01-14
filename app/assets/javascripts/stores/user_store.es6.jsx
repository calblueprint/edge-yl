(() => {
  class UserStore {

    constructor() {
      this.overlay = false;
      this.user = {
        responsibilities: [],
        leadership: {},
      };
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: UserActions.CLOSE_OVERLAY,
        handleStoreAttribute: UserActions.STORE_ATTRIBUTE,
        handleStoreError: UserActions.STORE_ERROR,
        handleStoreTemplate: UserActions.STORE_TEMPLATE,
        handleStoreUser: UserActions.STORE_USER,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }

    handleStoreUser(response) {
      this.overlay = false;
      this.user = response.user;
    }
  }
  this.UserStore = alt.createStore(UserStore);
})();
