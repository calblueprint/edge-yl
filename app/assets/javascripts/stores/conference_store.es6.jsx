(() => {
  class ConferenceStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
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
        handleRemoveGroup: ConferenceActions.REMOVE_GROUP,
        handleRemoveRoom: ConferenceActions.REMOVE_ROOM,
        handleStoreAttribute: ConferenceActions.STORE_ATTRIBUTE,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
        handleStoreError: ConferenceActions.STORE_ERROR,
        handleStoreGroup: ConferenceActions.STORE_GROUP,
        handleStoreGroupables: ConferenceActions.STORE_GROUPABLES,
        handleStorePairing: ConferenceActions.STORE_PAIRING,
        handleStoreRoom: ConferenceActions.STORE_ROOM,
        handleStoreTemplate: ConferenceActions.STORE_TEMPLATE,
        handleStoreValue: ConferenceActions.STORE_VALUE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.pairing = null;
      this.template = null;
    }

    handleRemoveGroup(response) {
      var groups = this.conference.groups;
      var id = response.group.id;
      this.conference.groups = groups.filter((group) => group.id !== id);
    }

    handleRemoveRoom(response) {
      var rooms = this.conference.rooms;
      var id = response.room.id;
      this.conference.rooms = rooms.filter((room) => room.id !== id);
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreGroup(response) {
      this.overlay = false;
      this.conference.groups.push(response.group);
    }

    handleStoreGroupables(response) {
      this.groupables = response.users;
    }

    handleStoreRoom(response) {
      this.overlay = false;
      this.conference.rooms.push(response.room);
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
