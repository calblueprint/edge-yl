(() => {
  class StudentsActions {

    fetchStudents(page) {
      resolve = (response) => this.updateStudents(response);
      Requester.get(ApiConstants.students.index(page), resolve);
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
