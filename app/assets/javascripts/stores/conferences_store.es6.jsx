(() => {
  class ConferencesStore {

    constructor() {
      this.conferences = [];
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.template = {
        errors: {},
      };
      this.bindListeners({
        handleStoreAttribute: ConferencesActions.STORE_ATTRIBUTE,
        handleStoreConferences: ConferencesActions.STORE_CONFERENCES,
        handleStoreError: ConferencesActions.STORE_ERROR,
        handleStoreOverlay: ConferencesActions.STORE_OVERLAY,
      });
    }

    handleStoreAttribute(attribute) {
      this.template[attribute.key] = attribute.value;
    }

    handleStoreConferences(response) {
      this.conferences = response.conferences;
      this.pagination = response.meta.pagination;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.ConferencesStore = alt.createStore(ConferencesStore);
})();
