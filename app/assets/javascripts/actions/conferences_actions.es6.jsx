(() => {
  class ConferencesActions {

    constructor() {
      this.generateActions(
        'storeConferences',
        'toggleSidebar'
      );
    }

    fetchConferences(page) {
      var resolve = (response) => this.storeConferences(response);
      Requester.get(ApiConstants.conferences.index(page), resolve);
      return true;
    }
  }
  this.ConferencesActions = alt.createActions(ConferencesActions);
})();
