(() => {
  class ProspectsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overaly = false;
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.prospects = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: ProspectsActions.CLOSE_OVERLAY,
        handleStoreAttribute: ProspectsActions.STORE_ATTRIBUTE,
        handleStoreError: ProspectsActions.STORE_ERROR,
        handleStoreProspect: ProspectsActions.STORE_PROSPECT,
        handleStoreProspects: ProspectsActions.STORE_PROSPECTS,
        handleStoreTemplate: ProspectsActions.STORE_TEMPLATE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.template = null;
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreProspect(response) {
      this.overlay = false;
      this.prospects.push(response.prospect);
    }

    handleStoreProspects(response) {
      this.pagination = response.meta.pagination;
      this.prospects = response.prospects;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.ProspectsStore = alt.createStore(ProspectsStore);
})();
