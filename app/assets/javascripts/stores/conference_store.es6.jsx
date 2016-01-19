(() => {
  class ConferenceStore {

    constructor() {
      this.overlay = false;
      this.conference = {
        groups: [],
      };
      this.bindListeners({
        handleStoreOverlay: ConferenceActions.STORE_OVERLAY,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
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

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.ConferenceStore = alt.createStore(ConferenceStore);
})();
