(() => {
  class ConferencesActions {

    constructor() {
      this.generateActions(
        'storeConferences'
      );
    }

    fetchConferences(page) {
      var resolve = (response) => this.storeConferences(response);
      Requester.get(ApiConstants.conferences.index(page), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }
  }
  this.ConferencesActions = alt.createActions(ConferencesActions);
})();
