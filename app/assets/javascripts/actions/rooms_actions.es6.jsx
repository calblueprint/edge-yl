(() => {
  class RoomsActions {

    constructor() {
      this.generateActions(
        'storeRooms',
      );
    }

    fetchRooms(page, query) {
      console.log('RoomsActions', query)
      var resolve = (response) => {
        response.meta.query = query;
        this.storeRooms(response);
      };
      Requester.get(ApiConstants.rooms.index(page, query), resolve);
      return true;
    }
  }
  this.RoomsActions = alt.createActions(RoomsActions);
})();
