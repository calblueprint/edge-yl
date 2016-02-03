(() => {
  class ConferenceActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeConference',
        'storeGroup',
        'storeError',
        'storeRoom',
        'storeValue',
      );
    }

    createGroup(params) {
      var resolve = (response) => this.storeGroup(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.groups.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    createRoom(template) {
      var params = { room: template.attributes };
      var resolve = (response) => this.storeRoom(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.rooms.create,
        params,
        resolve,
        reject
      );
      return true;
    }

    deleteGroup(id) {
      var attributes = {};
      attributes['conference_id'] = null;
      var params = { group: attributes };
      Requester.update(
        ApiConstants.groups.update(id),
        params,
      );
      return id;
    }

    deleteRoom(id) {
      var attributes = {};
      attributes['conference_id'] = null;
      var params = { room: attributes };
      Requester.update(
        ApiConstants.rooms.update(id),
        params,
      );
      return id;
    }

    fetchConference(id) {
      var resolve = (response) => this.storeConference(response);
      Requester.get(ApiConstants.conferences.show(id), resolve);
      return true;
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storePairing(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        type: options.type,
        value: options.value,
      };
    }

    storeTemplate(model, attributes={}) {
      return {
        attributes: attributes,
        errors: {},
        model: model,
      };
    }

    updateConference(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { conference: attributes };
      var resolve = (response) => this.storeConference(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.conferences.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.ConferenceActions = alt.createActions(ConferenceActions);
})();

