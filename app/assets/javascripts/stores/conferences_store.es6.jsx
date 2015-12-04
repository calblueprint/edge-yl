(() => {
  class ConferencesStore {

    constructor() {
      this.sidebar = true;
      this.conferences = [];
      this.bindListeners({
        handleStoreConferences: ConferencesActions.STORE_CONFERENCES,
        handleToggleSidebar: ConferencesActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreConferences(response) {
      this.conferences = response.conferences;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.ConferencesStore = alt.createStore(ConferencesStore);
})();
