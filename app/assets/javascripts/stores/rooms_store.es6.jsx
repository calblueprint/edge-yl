(() => {
  class RoomsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = [];
      this.firstLoad = true;
      this.overlay = false;
      this.rooms = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: RoomsActions.CLOSE_OVERLAY,
        handleRemoveRoom: RoomsActions.REMOVE_ROOM,
        handleRestoreRooms: RoomsActions.RESTORE_ROOMS,
        handleStoreAttribute: RoomsActions.STORE_ATTRIBUTE,
        handleStoreConference: RoomsActions.STORE_CONFERENCE,
        handleStoreRoom: RoomsActions.STORE_ROOM,
        handleStoreRooms: RoomsActions.STORE_ROOMS,
        handleStoreTemplate: RoomsActions.STORE_TEMPLATE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.template = null;
    }

    handleRemoveRoom(response) {
      var id = response.room.id;
      this.rooms = this.rooms.filter((room) => room.id !== id);
    }

    handleRestoreRooms(state) {
      this.rooms = state.rooms;
      this.conference = state.conference;
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreConference(conference) {
      this.conference = conference;
      if (this.firstLoad) {
        this.firstLoad = false;
        window.history.replaceState(
          {
            conference: this.conference,
            rooms: this.rooms,
          },
          null,
          RouteConstants.rooms.index(this.conference.id)
        );
      } else {
        window.history.pushState(
          {
            conference: this.conference,
            rooms: this.rooms,
          },
          null,
          RouteConstants.rooms.index(this.conference.id)
        );
      }
    }

    handleStoreRoom(response) {
      this.overlay = false;
      this.rooms.push(response.room);
    }

    handleStoreRooms(response) {
      this.overlay = false;
      this.rooms = response.rooms;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.RoomsStore = alt.createStore(RoomsStore);
})();
