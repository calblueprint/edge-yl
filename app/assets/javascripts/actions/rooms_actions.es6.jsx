(() => {
  class RoomsActions {

    constructor() {
      this.generateActions(
        'storeRooms',
      );
    }

    fetchRooms(page, conference_id) {
      var resolve = (response) => {
        response.meta.conference_id = conference_id;
        this.storeRooms(response);
      };
      Requester.get(ApiConstants.rooms.index(page, conference_id), resolve);
      return true;
    }
  }
  this.RoomsActions = alt.createActions(RoomsActions);
})();
