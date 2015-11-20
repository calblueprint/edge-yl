(() => {
  class SchoolsActions {

    constructor() {
      this.generateActions(
        'storeSchools',
        'toggleSidebar'
      );
    }

    fetchSchools() {
      resolve = (response) => this.storeSchools(response);
      Requester.get(ApiConstants.schools.index, resolve);
      return true;
    }
  }
  this.SchoolsActions = alt.createActions(SchoolsActions);
})();
