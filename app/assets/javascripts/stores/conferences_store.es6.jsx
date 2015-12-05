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
      this.pagination = response.meta.pagination;
      this.conferences = response.conferences;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.ConferencesStore = alt.createStore(ConferencesStore);
})();
