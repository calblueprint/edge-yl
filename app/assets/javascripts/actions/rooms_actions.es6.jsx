(() => {
  class RoomsActions {

    constructor() {
      this.generateActions(
        'storeRooms',
      );
    }

    fetchRooms(conference) {
      var resolve = (response) => this.storeRooms(response);
      Requester.get(ApiConstants.rooms.index(conference.id), resolve);
      return true;
    }
  }
  this.RoomsActions = alt.createActions(RoomsActions);
})();
