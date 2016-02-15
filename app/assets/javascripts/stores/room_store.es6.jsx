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
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreRoom(response) {
      this.overlay = false;
      this.room = response.room;
    }
  }
  this.RoomStore = alt.createStore(RoomStore);
})();
