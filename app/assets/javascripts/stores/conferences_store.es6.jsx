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
      });
    }

    handleStoreConferences(response) {
      this.conferences = response.conferences;
      this.pagination = response.meta.pagination;
    }
  }
  this.ConferencesStore = alt.createStore(ConferencesStore);
})();
