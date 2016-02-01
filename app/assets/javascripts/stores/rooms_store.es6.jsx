(() => {
  class RoomsStore {

    constructor() {
      this.conference = {};
      this.overlay = false;
      this.conferences = [];
      this.rooms = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: RoomsActions.CLOSE_OVERLAY,
        handleStoreRoom: RoomsActions.STORE_ROOM,
        handleStoreRooms: RoomsActions.STORE_ROOMS,
        handleStoreAttribute: RoomsActions.STORE_ATTRIBUTE,
        handleStoreTemplate: RoomsActions.STORE_TEMPLATE,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
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
