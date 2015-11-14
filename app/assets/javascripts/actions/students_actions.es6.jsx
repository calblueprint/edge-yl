(() => {
  class StudentsActions {

    fetchStudents() {
      resolve = (response) => this.updateStudents(response);
      Requester.get(ApiConstants.students.index(1), resolve);
      return true;
    }

    toggleSidebar(sidebar) {
      console.log('hi');
      return sidebar;
    }

    updateStudents(students) {
      return students;
    }
  }
  this.StudentsActions = alt.createActions(StudentsActions);
})();
