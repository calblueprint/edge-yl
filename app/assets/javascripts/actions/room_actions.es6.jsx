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

    storeTemplate(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }

    updateRoom(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { room: attributes };
      var resolve = (response) => this.storeRoom(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.rooms.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.RoomActions = alt.createActions(RoomActions);
})();

