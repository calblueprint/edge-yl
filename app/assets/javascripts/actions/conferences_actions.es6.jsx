(() => {
  class ConferencesActions {

    constructor() {
      this.generateActions(
        'storeConferences',
        'toggleSidebar'
      );
    }

    fetchConferences() {
      resolve = (response) => this.storeConferences(response);
      Requester.get(ApiConstants.conferences.index, resolve);
      return true;
    }
  }
  this.ConferencesActions = alt.createActions(ConferencesActions);
})();
