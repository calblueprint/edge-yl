(() => {
  class StudentsActions {

    constructor() {
      this.generateActions(
        'toggleSidebar',
        'updateStudents'
      );
    }

    fetchStudents(page) {
      resolve = (response) => this.updateStudents(response);
      Requester.get(ApiConstants.students.index(page), resolve);
      return true;
    }
  }
  this.StudentsActions = alt.createActions(StudentsActions);
})();
