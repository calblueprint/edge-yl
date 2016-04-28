(() => {
  class VolunteersStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overlay = false;
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.template = null;
      this.volunteers = [];
      this.bindListeners({
        handleCloseOverlay: VolunteersActions.CLOSE_OVERLAY,
        handleStoreAttribute: VolunteersActions.STORE_ATTRIBUTE,
        handleStoreError: VolunteersActions.STORE_ERROR,
        handleStoreTemplate: VolunteersActions.STORE_TEMPLATE,
        handleStoreVolunteer: VolunteersActions.STORE_VOLUNTEER,
        handleStoreVolunteers: VolunteersActions.STORE_VOLUNTEERS,
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

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }

    handleStoreVolunteer(response) {
      this.overlay = false;
      this.volunteers.push(response.volunteer)
    }

    handleStoreVolunteers(response) {
      this.pagination = response.meta.pagination;
      this.volunteers = response.volunteers;
    }
  }
  this.VolunteersStore = alt.createStore(VolunteersStore);
})();
