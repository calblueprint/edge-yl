(() => {
  class RoomsStore {

    constructor() {
      this.conferences = [];
      this.conference_id = {};
      this.rooms = [];
      this.bindListeners({
        handleStoreRooms: RoomsActions.STORE_ROOMS,
      });
    }

    handleStoreRooms(response) {
      this.rooms = response.rooms;
    }
  }
  this.RoomsStore = alt.createStore(RoomsStore);
})();
