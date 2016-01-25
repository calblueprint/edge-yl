(() => {
  class ConferenceStore {

    constructor() {
      this.overlay = false;
      this.conference = {
        groups: [],
      };
      this.template = {};
      this.bindListeners({
        handleStoreOverlay: ConferenceActions.STORE_OVERLAY,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
        handleStoreError: ConferenceActions.STORE_ERROR,
        handleStoreGroup: ConferenceActions.STORE_GROUP,
      });
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

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.ConferenceStore = alt.createStore(ConferenceStore);
})();
