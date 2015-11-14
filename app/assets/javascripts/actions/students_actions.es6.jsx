(() => {
  class StudentsActions {

    fetchStudents() {
      resolve = (response) => this.updateStudents(response);
      Requester.get(ApiConstants.students.index(1), resolve);
    }

    updateStudents(students) {
      return students;
    }
  }
  this.StudentsActions = alt.createActions(StudentsActions);
})();
