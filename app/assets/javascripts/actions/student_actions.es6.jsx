(() => {
  class StudentActions {

    fetchStudent(id) {
      resolve = (response) => this.updateStudent(response);
      Requester.get(ApiConstants.students.show(id), resolve);
      return true;
    }

    toggleSidebar(sidebar) {
      return sidebar;
    }

    updateStudent(student) {
      return student;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
