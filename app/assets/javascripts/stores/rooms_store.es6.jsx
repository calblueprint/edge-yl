(() => {
  class RoomsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = [];
      this.overlay = false;
      this.rooms = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: RoomsActions.CLOSE_OVERLAY,
        handleRemoveRoom: RoomsActions.REMOVE_ROOM,
        handleStoreRoom: RoomsActions.STORE_ROOM,
        handleStoreRooms: RoomsActions.STORE_ROOMS,
        handleStoreAttribute: RoomsActions.STORE_ATTRIBUTE,
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

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
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
