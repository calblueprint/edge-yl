(() => {
  class ConferencesStore {

    constructor() {
      this.conferences = [];
      this.overlay = false;
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: ConferencesActions.CLOSE_OVERLAY,
        handleStoreAttribute: ConferencesActions.STORE_ATTRIBUTE,
        handleStoreConference: ConferencesActions.STORE_CONFERENCE,
        handleStoreConferences: ConferencesActions.STORE_CONFERENCES,
        handleStoreError: ConferencesActions.STORE_ERROR,
        handleStoreTemplate: ConferencesActions.STORE_TEMPLATE,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(attribute) {
      this.template[attribute.key] = attribute.value;
    }

    handleStoreConference(response) {
      this.overlay = false;
      this.conferences.push(response.conference);
    }

    handleStoreConferences(response) {
      this.conferences = response.conferences;
      this.pagination = response.meta.pagination;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.ConferencesStore = alt.createStore(ConferencesStore);
})();
