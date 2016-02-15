(() => {
  class RoomActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeRoom',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchRoom(id) {
      var resolve = (response) => this.storeRoom(response);
      Requester.get(ApiConstants.rooms.show(id), resolve);
      return true;
    }
  }
  this.RoomActions = alt.createActions(RoomActions);
})();

