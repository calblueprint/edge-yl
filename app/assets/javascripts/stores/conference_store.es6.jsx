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
        conference: {
          groups: [],
        },
      };
      this.bindListeners({
        handleStoreOverlay: ConferenceActions.STORE_OVERLAY,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
        handleToggleSidebar: ConferenceActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreConference(response) {
      this.overlay.active = false;
      this.conference = response.conference;
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }
  }
  this.ConferenceStore = alt.createStore(ConferenceStore);
})();
