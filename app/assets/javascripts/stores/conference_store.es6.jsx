(() => {
  class ConferenceStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
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
      this.overlay.active = false;
      this.conference.groups.push(response.group);
    }

    handleStoreConference(response) {
      this.overlay.active = false;
      this.conference = response.conference;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.ConferenceStore = alt.createStore(ConferenceStore);
})();
