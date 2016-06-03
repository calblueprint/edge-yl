(() => {
  class VolunteersStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = null;
      this.conferences = {};
      this.firstLoad = true;
      this.overlay = false;
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.template = null;
      this.volunteers = [];
      this.bindListeners({
        handleCloseOverlay: VolunteersActions.CLOSE_OVERLAY,
        handleRestoreVolunteers: VolunteersActions.RESTORE_VOLUNTEERS,
        handleStoreAttribute: VolunteersActions.STORE_ATTRIBUTE,
        handleStoreConference: VolunteersActions.STORE_CONFERENCE,
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

    handleRestoreVolunteers(state) {
      if (state) {
        this.pagination = state.pagination;
        this.volunteers = state.volunteers;
      }
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreConference(conference) {
      this.conference = conference;
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
      var pagination = response.meta.pagination;
      this.volunteers = response.volunteers
      this.pagination = pagination;
      if (this.firstLoad) {
        this.firstLoad = false;
        window.history.replaceState(
          {
            conference: this.conference,
            pagination: pagination,
            volunteers: this.volunteers,
          },
          null,
          RouteConstants.volunteers.index(this.conference.id, pagination.current),
        );
      } else {
        window.history.pushState(
          {
            conference: this.conference,
            pagination: pagination,
            volunteers: this.volunteers,
          },
          null,
          RouteConstants.volunteers.index(this.conference.id, pagination.current),
        );
      }
    }
  }
  this.VolunteersStore = alt.createStore(VolunteersStore);
})();
