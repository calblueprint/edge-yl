(() => {
  class RoomsActions {

    constructor() {
      this.generateActions(
        'storeRooms',
      );
    }

    fetchRooms(conference_id, conferences) {
      var resolve = (response) => this.storeRooms(response);
      if (!conference_id) {
        conference_id = conferences[0].id
      }
      Requester.get(ApiConstants.rooms.index(conference_id), resolve);
      return true;
    }
  }
  this.RoomsActions = alt.createActions(RoomsActions);
})();
