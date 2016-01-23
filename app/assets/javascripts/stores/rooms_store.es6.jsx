(() => {
  class RoomsStore {

    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.conference_id = {};
      this.rooms = [];
      this.bindListeners({
        handleStoreRooms: RoomsActions.STORE_ROOMS,
      });
    }

    handleStoreRooms(response) {
      this.pagination = response.meta.pagination;
      this.rooms = response.rooms;
      this.conference_id = response.meta.conference_id;
    }
  }
  this.RoomsStore = alt.createStore(RoomsStore);
})();
