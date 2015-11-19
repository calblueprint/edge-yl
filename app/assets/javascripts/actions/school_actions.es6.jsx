(() => {
  class SchoolActions {

    constructor() {
      this.generateActions(
        'storeSchool'
      );
    }

    fetchSchool(id) {
      resolve = (response) => this.storeSchool(response);
      Requester.get(ApiConstants.schools.show(id), resolve);
      return true;
    }

    toggleSidebar(sidebar) {
      return sidebar;
    }
  }
  this.SchoolActions = alt.createActions(SchoolActions);
})();
