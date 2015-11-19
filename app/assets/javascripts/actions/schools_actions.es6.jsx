(() => {
  class SchoolsActions {

    fetchSchools(page) {
      resolve = (response) => this.updateSchools(response);
      Requester.get(ApiConstants.schools.index(page), resolve);
      return true;
    }

    toggleSidebar(sidebar) {
      return sidebar;
    }

    updateSchools(schools) {
      return schools;
    }
  }
  this.SchoolsActions = alt.createActions(SchoolsActions);
})();
