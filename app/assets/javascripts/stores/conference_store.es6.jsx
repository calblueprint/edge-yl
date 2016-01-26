(() => {
  class ConferenceStore {

    constructor() {
      this.overlay = false;
      this.conference = {
        groups: [],
        rooms: [],
      };
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: ConferenceActions.CLOSE_OVERLAY,
        handleStoreAttribute: ConferenceActions.STORE_ATTRIBUTE,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
        handleStoreError: ConferenceActions.STORE_ERROR,
        handleStoreGroup: ConferenceActions.STORE_GROUP,
        handleStoreTemplate: ConferenceActions.STORE_TEMPLATE,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
    }

    handleStoreGroup(response) {
      this.overlay = false;
      this.conference.groups.push(response.group);
    }

    handleStoreConference(response) {
      this.overlay = false;
      this.conference = response.conference;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.ConferenceStore = alt.createStore(ConferenceStore);
})();
