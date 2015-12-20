(() => {
  class UserStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = true;
      this.user = {
        responsibilities: [],
      };
      this.bindListeners({
        handleStoreOverlay: UserActions.STORE_OVERLAY,
        handleStoreUser: UserActions.STORE_USER,
      });
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreUser(response) {
      this.user = response.user;
      this.overlay.active = false;
    }
  }
  this.UserStore = alt.createStore(UserStore);
})();
