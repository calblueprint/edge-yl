(() => {
  class RoomsStore {

    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.rooms = [];
      this.bindListeners({
        handleStoreRooms: RoomsActions.STORE_ROOMS,
      });
    }

    handleStoreRooms(response) {
      this.pagination = response.meta.pagination;
      this.rooms = response.rooms;
    }
  }
  this.RoomsStore = alt.createStore(RoomsStore);
})();
