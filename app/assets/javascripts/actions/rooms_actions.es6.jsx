(() => {
  class RoomsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'removeRoom',
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

    deleteRoom(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        var attributes = {};
        attributes['conference_id'] = null;
        var params = { room: attributes };
        var resolve = (response) => this.removeRoom(response);
        Requester.update(
          ApiConstants.rooms.update(id),
          params,
          resolve,
        );
      }
      return true;
    }

    exportRooms(conference_id) {
      Requester.csv(ApiConstants.csvs.rooms(conference_id), 'rooms');
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
