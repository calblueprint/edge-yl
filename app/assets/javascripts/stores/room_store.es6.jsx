(() => {
  class RoomStore {

    constructor() {
      this.editable = false;
      this.overlay = false;
      this.room = {};
      this.template = {};
      this.bindListeners({
        handleStoreRoom: RoomActions.STORE_ROOM,
        handleToggleEditability: RoomActions.TOGGLE_EDITABILITY,
      });
    }

    handleStoreRoom(response) {
      this.overlay = false;
      this.room = response.room;
    }

    handleToggleEditability() {
      this.editable = !this.editable;
    }
  }
  this.RoomStore = alt.createStore(RoomStore);
})();
