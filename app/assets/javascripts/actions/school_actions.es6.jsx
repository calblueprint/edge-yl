(() => {
  class SchoolActions {

    fetchSchool(id) {
      resolve = (response) => this.storeSchool(response);
      Requester.get(ApiConstants.schools.show(id), resolve);
      return true;
    }

    toggleSidebar(sidebar) {
      return sidebar;
    }

    storeSchool(school) {
      return school;
    }
  }
  this.SchoolActions = alt.createActions(SchoolActions);
})();
