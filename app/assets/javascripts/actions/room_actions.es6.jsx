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
    exportRoom(id) {
      Requester.csv(ApiConstants.csvs.room(id), 'room');
      return true;
    }

    fetchRoom(id) {
      var resolve = (response) => this.storeRoom(response);
      Requester.get(ApiConstants.rooms.show(id), resolve);
      return true;
    }
  }
  this.RoomActions = alt.createActions(RoomActions);
})();

