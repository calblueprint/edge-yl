(() => {
  class ConferenceStore {

    constructor() {
      this.overlay = false;
      this.conference = {
        groups: [],
        rooms: [],
      };
      this.pairing = null;
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: ConferenceActions.CLOSE_OVERLAY,
        handleDeleteGroup: ConferenceActions.DELETE_GROUP,
        handleStoreAttribute: ConferenceActions.STORE_ATTRIBUTE,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
        handleStoreError: ConferenceActions.STORE_ERROR,
        handleStoreGroup: ConferenceActions.STORE_GROUP,
        handleStorePairing: ConferenceActions.STORE_PAIRING,
        handleStoreTemplate: ConferenceActions.STORE_TEMPLATE,
        handleStoreValue: ConferenceActions.STORE_VALUE,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }


    handleDeleteGroup(groupId) {
      this.conference.groups = this.conference.groups.filter(function(group) { return group.id != groupId });
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;

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
      if (this.pairing) {
        this.pairing.errors = response.errors;
      } else if (this.template) {
        this.template.errors = response.errors;
      }
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.template = null;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.pairing = null;
      this.template = template;
    }

    handleStoreValue(value) {
      this.pairing.value = value;
    }
  }
  this.ConferenceStore = alt.createStore(ConferenceStore);
})();
