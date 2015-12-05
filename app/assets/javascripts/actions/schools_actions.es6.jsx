(() => {
  class SchoolsActions {

    constructor() {
      this.generateActions(
        'storeSchools',
        'toggleSidebar'
      );
    }

    fetchSchools(page) {
      var resolve = (response) => this.storeSchools(response);
      Requester.get(ApiConstants.schools.index(page), resolve);
      return true;
    }
  }
  this.SchoolsActions = alt.createActions(SchoolsActions);
})();
