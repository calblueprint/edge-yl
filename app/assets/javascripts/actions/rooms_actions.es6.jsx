(() => {
  class RoomsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeRoom',
        'storeRooms',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createRoom(template) {
      var params = { room: template.attributes };
      var resolve = (response) => this.storeRoom(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.rooms.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchRooms(conference) {
      var resolve = (response) => this.storeRooms(response);
      Requester.get(ApiConstants.rooms.index(conference.id), resolve);
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storeTemplate(model, attributes={}) {
      return {
        attributes: attributes,
        errors: {},
        model: model,
      };
    }
  }
  this.RoomsActions = alt.createActions(RoomsActions);
})();
