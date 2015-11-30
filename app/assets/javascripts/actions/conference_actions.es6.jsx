(() => {
  class ConferenceActions {

    constructor() {
      this.generateActions(
        'storeConference',
        'toggleSidebar'
      );
    }

    fetchConference(id) {
      resolve = (response) => this.storeConference(response);
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

    updateconference(id, params) {
      resolve = (response) => this.storeConference(response);
      Requester.update(ApiConstants.conferences.update(id), params, resolve);
      return true;
    }
  }
  this.ConferenceActions = alt.createActions(ConferenceActions);
})();

