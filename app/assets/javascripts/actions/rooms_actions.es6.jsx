(() => {
  class RoomsActions {

    constructor() {
      this.generateActions(
        'storeRooms',
      );
    }

    fetchRooms(page) {
      var resolve = (response) => this.storeRooms(response);
      Requester.get(ApiConstants.rooms.index(page), resolve);
      return true;
    }
  }
  this.RoomsActions = alt.createActions(RoomsActions);
})();
