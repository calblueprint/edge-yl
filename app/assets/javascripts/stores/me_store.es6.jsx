(() => {
  class MeStore {

    constructor() {
      this.me = null;
      this.bindListeners({
        handleStoreMe: MeActions.STORE_ME,
      });
    }

    handleStoreMe(response) {
      this.me = response.user;
    }
  }
  this.MeStore = alt.createStore(MeStore);
})();
