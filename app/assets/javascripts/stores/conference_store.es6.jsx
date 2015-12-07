(() => {
  class ConferenceStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = true;
      this.conference = {
        groups: [],
      };
      this.bindListeners({
        handleStoreOverlay: ConferenceActions.STORE_OVERLAY,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
      });
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
