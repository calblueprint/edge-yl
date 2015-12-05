(() => {
  class ConferencesStore {

    constructor() {
      this.conferences = [];
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.sidebar = true;
      this.bindListeners({
        handleStoreConferences: ConferencesActions.STORE_CONFERENCES,
        handleToggleSidebar: ConferencesActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreConferences(response) {
      this.conferences = response.conferences;
      this.pagination = response.meta.pagination;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.ConferencesStore = alt.createStore(ConferencesStore);
})();
