(() => {
  class ConferenceStore {

    constructor() {
      this.overlay = false;
      this.conference = {
        groups: [],
      };
      this.template = {};
      this.bindListeners({
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
        handleStoreGroup: ConferenceActions.STORE_GROUP,
        handleStoreTemplate: ConferenceActions.STORE_TEMPLATE,
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

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.ConferenceStore = alt.createStore(ConferenceStore);
})();
