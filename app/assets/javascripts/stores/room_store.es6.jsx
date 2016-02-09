(() => {
  class RoomStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.editable = false;
      this.overlay = false;
      this.room = {
        students: [],
      };
      this.template = {};
      this.bindListeners({
        handleStoreRoom: RoomActions.STORE_ROOM,
        handleToggleEditability: RoomActions.TOGGLE_EDITABILITY,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
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
