(() => {
  class RoomActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeError',
        'storeRoom',
        'toggleEditability',
      );
    }

    fetchRoom(id) {
      var resolve = (response) => this.storeRoom(response);
      Requester.get(ApiConstants.rooms.show(id), resolve);
      return true;
    }
  }
  this.RoomActions = alt.createActions(RoomActions);
})();

