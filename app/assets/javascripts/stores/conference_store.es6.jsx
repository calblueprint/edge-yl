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
        handleDeleteGroup: ConferenceActions.DELETE_GROUP,
        handleDeleteRoom: ConferenceActions.DELETE_ROOM,
        handleStoreAttribute: ConferenceActions.STORE_ATTRIBUTE,
        handleStoreConference: ConferenceActions.STORE_CONFERENCE,
        handleStoreError: ConferenceActions.STORE_ERROR,
        handleStoreGroup: ConferenceActions.STORE_GROUP,
        handleStoreGroupables: ConferenceActions.STORE_GROUPABLES,
        handleStoreListAttribute: ConferenceActions.STORE_LIST_ATTRIBUTE,
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

    handleDeleteGroup(groupId) {
      this.conference.groups = this.conference.groups.filter(function(group) { return group.id != groupId });
    }

    handleDeleteRoom(roomId) {
      this.conference.rooms = this.conference.rooms.filter(function(room) { return room.id != roomId });
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

    handleStoreListAttribute(attribute) {
      this.template.attributes[attribute.key][attribute.index] = attribute.value;
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
