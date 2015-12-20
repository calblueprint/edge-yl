(() => {
  class ConferencesStore {

    constructor() {
      this.conferences = [];
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.bindListeners({
        handleStoreConferences: ConferencesActions.STORE_CONFERENCES,
        handleStoreOverlay: ConferencesActions.STORE_OVERLAY,
      });
    }

    handleStoreConferences(response) {
      this.conferences = response.conferences;
      this.pagination = response.meta.pagination;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.ConferencesStore = alt.createStore(ConferencesStore);
})();
