(() => {
  class ConferenceActions {

    constructor() {
      this.generateActions(
        'storeConference',
        'storeError',
        'storeGroup',
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

    fetchConference(id) {
      var resolve = (response) => this.storeConference(response);
      Requester.get(ApiConstants.conferences.show(id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateConference(id, params) {
      var resolve = (response) => this.storeConference(response);
      Requester.update(
        ApiConstants.conferences.update(id),
        params,
        resolve,
      );
      return true;
    }
  }
  this.ConferenceActions = alt.createActions(ConferenceActions);
})();

