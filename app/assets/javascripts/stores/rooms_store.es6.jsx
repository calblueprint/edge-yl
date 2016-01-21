(() => {
  class RoomsStore {

    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.query = {};
      this.rooms = [];
      this.bindListeners({
        handleStoreRooms: RoomsActions.STORE_ROOMS,
      });
    }

    handleStoreRooms(response) {
      this.pagination = response.meta.pagination;
      this.rooms = response.rooms;
      this.query = response.meta.query;
      console.log('store: ', this.query)
    }
  }
  this.RoomsStore = alt.createStore(RoomsStore);
})();
