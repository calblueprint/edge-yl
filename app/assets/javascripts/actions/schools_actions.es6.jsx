(() => {
  class SchoolsActions {

    constructor() {
      this.generateActions(
        'storeSchools'
      );
    }

    fetchSchools() {
      resolve = (response) => this.storeSchools(response);
      Requester.get(ApiConstants.schools.index, resolve);
      return true;
    }

    toggleSidebar(sidebar) {
      return sidebar;
    }

    storeSchools(schools) {
      return schools;
    }
  }
  this.SchoolsActions = alt.createActions(SchoolsActions);
})();
